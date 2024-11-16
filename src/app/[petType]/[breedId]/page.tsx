import ImageWithFallback from "@/app/components/ImageWithFallback"
import PetAttributte from "@/app/components/PetAttributte"
import PetCharacteristics from "@/app/components/PetCharacteristics"
import { PetTab } from "@/enums"
import { fetchBreedById } from "@/services/server/fetchPets"

type Params = {
  petType: PetTab
  breedId: string
}

type Props = {
  params: Promise<Params>
}

export default async function Page({ params }: Props) {
  const { breedId, petType } = await params
  const { data } = await fetchBreedById(petType, breedId)
  return (
    <main className="px-5 py-5 sm:py-10 lg:py-20 flex justify-center flex-wrap gap-6 md:gap-10 lg:gap-20">
      <ImageWithFallback className="w-[500px] max-w-full aspect-square object-cover rounded-md shadow-md" src={`https://cdn2.the${petType.slice(0, -1)}api.com/images/${data.reference_image_id}.jpg`} fallback={`/${petType.slice(0, -1)}_404.jpg`} alt={data.name} width={400} height={400} priority />
      <div className="max-w-[500px]">
        <section className="mb-5">
          <h2 className="font-bold text-3xl">{data.name}</h2>
          {data.origin && <p className="text-sm text-gray-500">{data.origin}.</p>}
        </section>
        {data.temperament && <PetAttributte title="Temperament" body={`${data.temperament}.`} />}
        {data.weight && <PetAttributte title="Weight" body={`${data.weight.metric} kg.`} />}
        {data.height && <PetAttributte title="Height" body={`${data.height.metric} cm.`} />}
        {data.life_span && <PetAttributte title="Life span" body={`${data.life_span}.`} />}
        <PetCharacteristics data={data} />
        {data.description && <p className="text-gray-600 mb-4">{data.description}</p>}
        {data.wikipedia_url && <p className="text-blue-500 text-center"><a href={data.wikipedia_url} target="_blank" className="hover:text-blue-700">Learn more</a></p>}
      </div>
    </main>
  )
}
