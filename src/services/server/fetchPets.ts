import { PETS } from '@/conts'
import { PetTab, PetType } from '@/enums'
import { type NextRequest } from 'next/server'
import { jsonResponse } from './jsonResponse'

const API_KEY = process.env.CAT_API_KEY ?? ''

export function fetchPets(animal: PetType) {
  const pet = PETS.find(pet => pet.animal === animal)
  return async function (request: NextRequest) {
    if (!pet) return jsonResponse({ error: true, data: null }, { status: 404, statusText: 'Not Found' })
    const uri = pet.apiUri
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
    if (!petResponse.ok) return jsonResponse({ error: true, data: null, pagination: { limit, page, nextPage: null } }, { status: petResponse.status, statusText: petResponse.statusText, headers })
    const data = await petResponse.json()
    const response = {
      pagination: {
        limit,
        page,
        nextPage: search ? null : data.length === limit ? page + 1 : null
      },
      data
    }
    return jsonResponse(response, {
      status: 200,
      headers
    })
  }
}

export async function fetchBreed(animal: PetTab, id: string) {
  const pet = PETS.find(pet => pet.tab === animal)
  if (!pet) throw new Error('Pet type not found')
  const petResponse = await fetch(`${pet.apiUri}/${id}`, {
    headers: {
      'x-api-key': API_KEY
    }
  })
  if (!petResponse.ok) throw new Error(`Error fetching breed: ${petResponse.status} ${petResponse.statusText}`)
  const data = await petResponse.json()
  return {
    data
  }
}
