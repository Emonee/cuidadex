import ImageWithFallback from "@/app/components/ImageWithFallback";
import { PetType } from "@/enums";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  description?: string;
  reference_image_id: number;
  petType?: PetType;
  weight?: { metric: string };
  height?: { metric: string };
  origin?: string;
  temperament?: string;
};

export default function PetCard({ id, name, reference_image_id: referenceImageId, petType = PetType.Cat, weight, height, origin, temperament }: Props) {
  return (
    <div className="w-56 h-80 rounded-md shadow-lg overflow-hidden relative group">
      <div className="z-[1]">
        <ImageWithFallback className="w-56 h-56 object-cover" src={`https://cdn2.the${petType}api.com/images/${referenceImageId}.jpg`} fallback={`/${petType}_404.jpg`} alt={name} width={400} height={400} priority />
        <div className="p-2">
          <h4 className="text-lg mb-2 line-clamp-1">{name}</h4>
          {weight && <p className="text-sm text-black/70">Weight: {weight.metric} kg</p>}
          {height && <p className="text-sm text-black/70">Height: {height.metric} cm</p>}
        </div>
      </div>
      <div className="absolute h-full w-full bottom-0 left-[-100%] bg-black/85 transition-all duration-200 ease-in-out group-hover:left-0 p-2 flex flex-col">
        <p className="text-sm mb-1 text-white/75">Origin:</p>
        <p className="text-white/85 mb-4">{origin || 'Not available yet 😿'}</p>
        <p className="text-sm mb-1 text-white/75">Temperament:</p>
        <p className="text-white/85">{temperament || 'Not available yet 😿'}.</p>
        <Link href={`/${petType}s/${id}`} className="text-white py-2 text-center bg-purple-500 rounded-md block mt-auto hover:bg-purple-800" prefetch={false}>Details</Link>
      </div>
    </div>
  );
}
