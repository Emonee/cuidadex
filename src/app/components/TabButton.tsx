'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TabButton({
  children,
  tab,
}: Readonly<{
  children: React.ReactNode
  tab: string
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const selectedTab = searchParams.get("tab");
  const selected = selectedTab ? selectedTab === tab : tab === "cats";

  const onClick = () => {
    if (selected) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <button
      className={`
        ${selected ? "bg-purple-900/50 text-purple-950 font-bold" : "bg-transparent hover:bg-purple-900/25"}
        w-48 text-center py-2 text-lg
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
