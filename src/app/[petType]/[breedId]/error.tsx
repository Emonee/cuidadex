'use client'

type Props = {
  error: Error & { digest?: string }
}

export default function Error({ error}: Props) {
  return (
    <main className="p-5">
      <h3 className="text-red-500 text-center text-xl font-bold">{error.message}</h3>
    </main>
  )
}
