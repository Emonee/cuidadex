'use client'

import InfiniteScrollObserver from "@/app/components/InfiniteScrollObserver";
import { PETS } from "@/conts";
import { PetTab } from "@/enums";
import { fetchPets } from "@/services/client/fetchPets";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import CardLoadingSkeleton from "./CardLoadingSkeleton";
import PetCard from "./PetCard";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const selectedTab: PetTab = (searchParams.get("tab") as PetTab) || PetTab.Cats;
  const selectedPet = PETS.find(pet => pet.tab === selectedTab) || PETS[0];
  const search = searchParams.get("search") ?? null;
  const { data, isLoading, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: [selectedPet.tab, search],
    queryFn: ({ pageParam }) => fetchPets[selectedPet.tab]({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pagination.nextPage,
    retry: false,
    refetchOnWindowFocus: false
  })
  const flatedData = data?.pages.flatMap(pages => pages.data);
  
  return (
    <div className="flex flex-wrap gap-10">
      {isLoading && Array.from({ length: 10 }).map((_, i) => <CardLoadingSkeleton key={i} />)}
      {Boolean(flatedData?.length) && flatedData?.map(pet => <PetCard key={pet.id} {...pet} petType={selectedPet.animal} />)}
      {data && hasNextPage && (
        <>
          <InfiniteScrollObserver cb={fetchNextPage} />
          {Array.from({ length: 10 }).map((_, i) => <CardLoadingSkeleton key={i} />)}
        </>
      )}
    </div>
  );
}
