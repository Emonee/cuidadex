import { PetType } from '@/enums'
import { fetchPets } from '@/services/server/fetchPets'

export const GET = fetchPets(PetType.Cat)
 