type Props = {
  title: string
  body: string
};

export default function PetAttributte({ title, body }: Props) {
  return (
    <div className="mb-2">
      <h4 className="text-lg text-gray-500 font-bold">{title}</h4>
      <p>{body}</p>
    </div>
  );
}
