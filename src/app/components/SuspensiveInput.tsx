'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function SuspensiveInput() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      const search = e.target.value;
      const params = new URLSearchParams(searchParams.toString());
      if (!search) params.delete("search");
      else params.set("search", search);
      router.push(`${pathname}?${params.toString()}`);
    }, 850);
  };

  return (
    <input
      type="text"
      placeholder="Search by breed"
      className="w-full max-w-[400px] p-2 border-2 border-purple-700/50 focus:border-purple-900/75 focus-visible:outline-none rounded-md mb-7"
      defaultValue={searchParams.get("search") ?? ''}
      onChange={onChange}
    />
  );
}
