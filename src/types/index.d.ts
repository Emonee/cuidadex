import { PetTab, PetType } from "@/enums";

export type Pet = {
  id: number
  animal: PetType
  tab: PetTab
  localPath: string
  apiUri: string
  legend: string
}
