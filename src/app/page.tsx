'use client'

import { useEffect, useState } from 'react'
import { use1healthAuth } from '@/lib/use1healthAuth'
import { postTo1healthAPI } from '@/lib/api'

import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function Home() {
  // Get token sent from the parent iframe (via postMessage)
  const token = use1healthAuth()

  // Store the returned user info from 1health API
  const [userInfo, setUserInfo] = useState<Record<string, unknown> | null>(null)

  // Store error message if API call fails
  const [error, setError] = useState<string | null>(null)

   // 1. When token is available, call the 1health userinfo endpoint
  useEffect(() => {
    if (!token) return

    postTo1healthAPI('v3/health/userinfo', {}, token)
      .then((data) => setUserInfo(data))
      .catch((err) => setError(err.message))
  }, [token])

  // 2. On initial page load, write a test document to Firestore
  useEffect(() => {
  // TEMP: Remove this check so Firebase write always runs for test
  const writeTestData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'testData'), {
        message: 'Hello from TRC Firebase!',
        timestamp: new Date(),
      })
      console.log('✅ Firestore doc written with ID:', docRef.id)
    } catch (err) {
      console.error('❌ Firestore write failed:', err)
    }
  }

  writeTestData()
}, [])

  // Render UI
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