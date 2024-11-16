import SearchResults from "@/app/components/SearchResults";
import Tabs from "@/app/components/Tabs";
import { Suspense } from "react";
import SetSearchInput from "./components/SetSearchInput";

export default function Home() {
  return (
    <main className="px-8 sm:px-12 lg:px-24 py-4">
      <h1 className="text-2xl mb-2">Welcome to Cuidadex 👋!</h1>
      <p className="mb-7">Search and find the cats and dogs you love.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Tabs />
        <SetSearchInput />
        <SearchResults />
      </Suspense>
    </main>
  );
}
