export async function fetchCats({ pageParam, search }: { pageParam: number, search: string | null }) {
  const searchParams = new URLSearchParams();
  searchParams.set('page', pageParam.toString());
  if (search) searchParams.set('search', search);
  const res = await fetch('/api/cats?' + searchParams.toString())
  if (!res.ok) throw Error('dsa')
  return res.json()
}

export async function fetchDogs({ pageParam, search }: { pageParam: number, search: string | null }) {
  const searchParams = new URLSearchParams();
  searchParams.set('page', pageParam.toString());
  if (search) searchParams.set('search', search);
  const res = await fetch('/api/dogs?' + searchParams.toString())
  if (!res.ok) throw Error('dsa')
  return res.json()
}

export const fetchPets = {
  cats: fetchCats,
  dogs: fetchDogs
}
