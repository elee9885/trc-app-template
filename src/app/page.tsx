'use client'

import { useEffect, useState } from 'react'
import { use1healthAuth } from '@/lib/use1healthAuth'
import { postTo1healthAPI } from '@/lib/api'

export default function Home() {
  const token = use1healthAuth()
  const [userInfo, setUserInfo] = useState<Record<string, unknown> | null>(null)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!token) return

    postTo1healthAPI('v3/health/userinfo', {}, token)
      .then((data) => setUserInfo(data))
      .catch((err) => setError(err.message))
  }, [token])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">🔐 TRC App Template</h1>

      {token ? (
        <>
          <p className="text-green-500">✅ Token acquired!</p>
          {userInfo ? (
            <pre className="mt-4 bg-gray-800 text-white p-4 rounded w-full max-w-xl overflow-auto">
              {JSON.stringify(userInfo, null, 2)}
            </pre>
          ) : (
            <p>Loading user info...</p>
          )}
        </>
      ) : (
        <p className="text-gray-500">Waiting for token...</p>
      )}

      {error && (
        <p className="text-red-500 mt-4">
          ⚠️ API Error: {error}
        </p>
      )}
    </main>
  )
}

