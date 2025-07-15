// lib/use1healthAuth.ts

import { useEffect, useState } from 'react'

export function use1healthAuth() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    // ✅ If in development, set a fake token manually
    if (process.env.NODE_ENV === 'development') {
      console.log('🧪 Using fake token in development mode')
      setToken('dev-fake-token')
      return
    }

    // ✅ In production, listen for postMessage from parent frame
    const listener = (event: MessageEvent) => {
      if (event.data?.type === '1health-auth' && event.data?.token) {
        setToken(event.data.token)
      }
    }

    window.addEventListener('message', listener)
    return () => window.removeEventListener('message', listener)
  }, [])

  return token
}
