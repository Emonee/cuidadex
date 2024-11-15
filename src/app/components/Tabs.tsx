'use client'

import { PETS } from "@/conts";
import TabButton from "./TabButton";

export default function Tabs() {
  return (
    <div className="w-full border-b-2 border-purple-700/50 mb-5">
      {
        PETS.map(pet => (
          <TabButton key={pet.id} pet={pet}>
            {pet.legend}
          </TabButton>
        ))
      }
    </div>
  )
}