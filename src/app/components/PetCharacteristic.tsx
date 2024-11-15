type Props = {
  title: string
  body?: string
  score: number
  emoji?: string
};

export default function PetCharacteristic({ title, score, emoji = '💜' }: Props) {
  const scoreLabel = Array(score).fill(emoji).join(" ")
  return (
    <div className="flex">
      <h4 className="text-lg text-gray-500 font-bold">{title}</h4>
      <p className="text-xl ml-auto">{scoreLabel}</p>
    </div>
  );
}