import { type NextRequest } from 'next/server'

const API_KEY = process.env.CAT_API_KEY ?? ''
const CAT_URI = 'https://api.thecatapi.com/v1/breeds'
const DOG_URI = 'https://api.thedogapi.com/v1/breeds'
const URIS = {
  cat: CAT_URI,
  dog: DOG_URI,
  cats: CAT_URI,
  dogs: DOG_URI
}

export function fetchPets(animal: 'cat' | 'dog') {
  const uri = URIS[animal]
  return async function (request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const limit = Number(searchParams.get('limit')) || 20
    const page = Number(searchParams.get('page'))
    const search = searchParams.get('search')
    const route = search ? uri + '/search' : uri
    const petSearchParams = new URLSearchParams();
    petSearchParams.set('page', page.toString());
    petSearchParams.set('limit', limit.toString());
    if (search) petSearchParams.set('q', search);
    const petResponse = await fetch(route + '?' + petSearchParams.toString(), {
      headers: {
        'x-api-key': API_KEY
      }
    })
    const headers = {
      'Content-Type': 'application/json',
      'X-Top-Secret-Api-Key': 'not_here_eather_muahaha'
    }
    if (!petResponse.ok) return new Response(JSON.stringify({ error: true, data: null, pagination: { limit, page, nextPage: null } }), { status: petResponse.status, statusText: petResponse.statusText, headers })
    const data = await petResponse.json()
    const response = {
      pagination: {
        limit,
        page,
        nextPage: search ? null : data.length === limit ? page + 1 : null
      },
      data
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers
    })
  }
}

export async function fetchBreed(animal: keyof typeof URIS, id: string) {
  const uri = URIS[animal]
  const petResponse = await fetch(`${uri}/${id}`, {
    headers: {
      'x-api-key': API_KEY
    }
  })
  if (!petResponse.ok) throw new Error('Error fetching breed')
  const data = await petResponse.json()
  return {
    data
  }
}
