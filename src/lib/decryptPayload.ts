// src/lib/decryptPayload.ts
import crypto from 'crypto'

const SALT = '1health-static-salt' // Optional: make this tenant-specific if needed

/**
 * Decrypts a base64 launch payload from 1health
 * @param encrypted Base64-encoded encrypted payload string (from ?lpl=)
 * @param secret Your app-specific LPL secret key (shared with 1health)
 * @returns Parsed payload object or null if failed
 */
export function decryptPayload(
  encrypted: string,
  secret: string
): Record<string, unknown> | null {
  try {
    const raw = Buffer.from(encrypted, 'base64')

    const iv = raw.slice(0, 16)
    const ciphertext = raw.slice(16)

    const key = crypto.pbkdf2Sync(secret, SALT, 100000, 32, 'sha256')

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
    let decrypted = decipher.update(ciphertext, undefined, 'utf8')
    decrypted += decipher.final('utf8')

    return JSON.parse(decrypted)
  } catch (err) {
    console.error('Failed to decrypt payload:', err)
    return null
  }
}

