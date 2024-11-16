import { PetTab } from '@/enums';

export async function fetchPets({ pageParam, search, petType }: { pageParam: number, search: string | null, petType: PetTab }) {
  const searchParams = new URLSearchParams();
  searchParams.set('page', pageParam.toString());
  if (search) searchParams.set('search', search);
  const res = await fetch(`/api/${petType}?` + searchParams.toString())
  if (!res.ok) throw Error('Error fetching the data')
  return res.json()
}
