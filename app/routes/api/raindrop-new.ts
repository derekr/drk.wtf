import { ActionArgs } from '@remix-run/server-runtime'

export const config = { runtime: 'edge' }

export async function action({ request }: ActionArgs) {
  const headers = request.headers
  const payload = await request.json()

  if (headers.get('token') !== process.env.RAINDROP_TEST_TOKEN) {
    throw new Error('Invalid token')
  }

  return fetch(`https://api.raindrop.io/rest/v1/raindrop`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_TEST_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pleaseParse: {}, link: payload.link }),
  })
}
