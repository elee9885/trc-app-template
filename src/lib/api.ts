export async function postTo1healthAPI(
  endpoint: string,
  body: Record<string, unknown>,
  token: string
) {
  const response = await fetch(`https://app.1health.io/api/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`1health API error: ${response.statusText}`)
  }

  return await response.json()
}
