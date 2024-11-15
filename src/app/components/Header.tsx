import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#4a306e] h-14 px-8 sm:px-12 lg:px-24">
      <Link href="/" className="text-white font-bold text-xl px-5 h-full hover:bg-[#35224e] flex items-center justify-center tracking-wider">🐶🐱 CuidaDex</Link>
    </header>
  );
}
