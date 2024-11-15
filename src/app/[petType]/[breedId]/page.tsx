import ImageWithFallback from "@/app/components/ImageWithFallback"
import { fetchBreed } from "@/services/server/fetchPets"

type Params = {
  petType: 'cats' | 'dogs'
  breedId: string
}

type Props = {
  params: Promise<Params>
}

export default async function Page({ params }: Props) {
  const { breedId, petType } = await params
  const { data } = await fetchBreed(petType, breedId)
  console.log(data);
  return (
    <main>
      <ImageWithFallback className="w-full h-full object-cover" src={`https://cdn2.the${petType.slice(0, -1)}api.com/images/${data.reference_image_id}.jpg`} fallback={`/${petType.slice(0, -1)}_404.jpg`} alt={data.name} width={400} height={400} priority />
      <h1>{data.name}</h1>
      <p>Origin: {data.origin ?? 'Not Available'}</p>
      <p>Life span: {data.life_span ?? 'Not Available'}</p>
      {data.height && <p>Height: {data.height?.metric ? `${data.height.metric} cm` : 'Not Available'}</p>}
      <p>Weight: {data.weight?.metric ? `${data.weight.metric} kg` : 'Not Available'}</p>
      <p>{data.description ?? 'Description not available'}</p>
    </main>
  )
}
