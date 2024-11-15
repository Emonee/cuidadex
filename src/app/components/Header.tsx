import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#4a306e] py-4 px-8 sm:px-12 lg:px-24">
      <Link href="/">CuidaDex</Link>
    </header>
  );
}
