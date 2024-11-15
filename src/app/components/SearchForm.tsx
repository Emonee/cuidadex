'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = new FormData(e.target as HTMLFormElement).get("search")?.toString();
    const params = new URLSearchParams(searchParams.toString());
    if (!search) params.delete("search");
    else params.set("search", search);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search" name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
