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
      className={`${
        selected ? "bg-rose-500" : "bg-transparent"
      } font-bold py-2 px-4 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
