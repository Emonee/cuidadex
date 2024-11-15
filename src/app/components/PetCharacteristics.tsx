import PetCharacteristic from "./PetCharacteristic";

type Props = {
  data: {
    energy_level?: number,
    intelligence?: number,
    child_friendly?: number,
    affection_level?: number
  }
};

export default function PetCharacteristics({ data: { energy_level, intelligence, child_friendly, affection_level } }: Props) {
  const hasNoCharacteristics = energy_level == undefined && intelligence == undefined && child_friendly == undefined && affection_level == undefined
  if (hasNoCharacteristics) return null
  return (
    <div className="my-5 bg-gray-200 rounded-md p-5 flex flex-col gap-1">
      {energy_level && <PetCharacteristic title="Energy level" score={energy_level} emoji="🏃‍♀️" />}
      {intelligence && <PetCharacteristic title="Intelligence" score={intelligence} emoji="💡" />}
      {child_friendly && <PetCharacteristic title="Child friendly" score={child_friendly} emoji="👼🏻" />}
      {affection_level && <PetCharacteristic title="Affection level" score={affection_level} />}
    </div>
  );
}