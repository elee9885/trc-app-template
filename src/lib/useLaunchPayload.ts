// src/lib/useLaunchPayload.ts
'use client'

import { useEffect, useState } from 'react'
import { decryptPayload } from './decryptPayload'

export function useLaunchPayload(): Record<string, unknown> | null {
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null)

  useEffect(() => {
    // Get encrypted LPL from ?lpl= in URL
    const urlParams = new URLSearchParams(window.location.search)
    const lpl = urlParams.get('lpl')

    const secret = process.env.NEXT_PUBLIC_LPL_SECRET_KEY
    if (!lpl || !secret) return

    // Attempt to decrypt the payload
    const result = decryptPayload(lpl, secret)
    if (result) {
      setPayload(result)
    }
  }, [])

  return payload
}
