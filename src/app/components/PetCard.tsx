import ImageWithFallback from "@/app/components/ImageWithFallback";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  description: string;
  reference_image_id: number;
  petType?: 'cat' | 'dog'
};

export default function PetCard({ id, name, description, reference_image_id: referenceImageId, petType = 'cat' }: Props) {
  return (
    <div>
      <ImageWithFallback className="w-48 h-48 object-cover" src={`https://cdn2.the${petType}api.com/images/${referenceImageId}.jpg`} fallback={`/${petType}_404.jpg`} alt={name} width={400} height={400} />
      <h4>{name}</h4>
      <p>{description}</p>
      <Link href={`/${petType}s/${id}`}>Details</Link>
    </div>
  );
}
