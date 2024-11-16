"use client";

import { PETS } from "@/conts";
import { Pet } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  pet: Pet;
  children: React.ReactNode;
};

export default function TabButton({ children, pet }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTab = searchParams.get("tab");
  const selected = selectedTab
    ? selectedTab === pet.tab
    : pet.tab === PETS[0].tab;

  const onClick = () => {
    if (selected) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", pet.tab);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <button
      className={`
        ${selected ? "bg-purple-900/50 text-purple-950 font-bold" : "bg-transparent hover:bg-purple-900/25"}
        w-36 md:w-48 text-center py-2 text-lg
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
