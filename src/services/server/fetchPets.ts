import { PETS } from '@/conts'
import { PetTab } from '@/enums'

const API_KEY = process.env.CAT_API_KEY ?? ''

export async function fetchBreeds({
  animal,
  page,
  limit,
  search
}: {animal: PetTab, page: number, limit: number, search: string | null}) {
  const pet = PETS.find(pet => pet.tab === animal)
  if (!pet) throw new Error('Pet type not found')
  const uri = pet.apiUri
  const petSearchParams = new URLSearchParams();
  petSearchParams.set('page', page.toString());
  petSearchParams.set('limit', limit.toString());
  const route = search ? uri + '/search' : uri
  if (search) petSearchParams.set('q', search);
  const petResponse = await fetch(route + '?' + petSearchParams.toString(), {
    headers: {
      'x-api-key': API_KEY
    }
  })
  if (!petResponse.ok) throw new Error(`Error fetching breeds: ${petResponse.status} ${petResponse.statusText}`)
  const data = await petResponse.json()
  return { data }
}

export async function fetchBreedById(animal: PetTab, id: string) {
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
