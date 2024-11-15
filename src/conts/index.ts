import { PetTab, PetType } from "@/enums";
import { Pet } from "@/types";


export const PETS: Pet[] = [
  {
    id: 1,
    animal: PetType.Cat,
    tab: PetTab.Cats,
    localPath: '/cats',
    apiUri: 'https://api.thecatapi.com/v1/breeds',
    legend: 'Cat'
  },
  {
    id: 2,
    animal: PetType.Dog,
    tab: PetTab.Dogs,
    localPath: '/dogs',
    apiUri: 'https://api.thedogapi.com/v1/breeds',
    legend: 'Dog'
  }
]