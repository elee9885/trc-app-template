import { useEffect, useState } from 'react'

export function use1healthAuth() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes('1health.io') && event.data?.token) {
        setToken(event.data.token)
      }
    }

    window.addEventListener('message', handleMessage)
    window.parent.postMessage({ type: 'request-token' }, '*')

    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return token
}
