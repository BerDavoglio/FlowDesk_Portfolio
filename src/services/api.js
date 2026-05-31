const API_URL = 'https://jsonplaceholder.typicode.com'

export async function api(endpoint, options = {}) {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },

      ...options,
    },
  )

  return response.json()
}
