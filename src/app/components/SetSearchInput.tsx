"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SuspensiveInput from "./SuspensiveInput";

export default function SetSearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (!search) params.delete("search");
    else params.set("search", search);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <SuspensiveInput
      type="text"
      placeholder="Search by breed"
      className="w-full max-w-[400px] p-2 border-2 border-purple-700/50 focus:border-purple-900/75 focus-visible:outline-none rounded-md mb-7"
      defaultValue={searchParams.get("search") ?? ""}
      onChange={onChange}
    />
  );
}
