'use client'

import InfiniteScrollObserver from "@/app/components/InfiniteScrollObserver";
import { fetchPets } from "@/services/client/fetchPets";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import PetCard from "./PetCard";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const selectedTab: 'cats' | 'dogs' = (searchParams.get("tab") as 'cats' | 'dogs') || 'cats';
  const search = searchParams.get("search") ?? null;
  const { data, isLoading, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: [selectedTab, search],
    queryFn: ({ pageParam }) => fetchPets[selectedTab]({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pagination.nextPage,
    retry: false,
    refetchOnWindowFocus: false
  })
  const flatedData = data?.pages.flatMap(pages => pages.data);
  
  return (
    <div>
      <h1>SearchResults</h1>
      {isLoading && <div>Loading...</div>}
      {Boolean(flatedData?.length) && flatedData?.map(cat => <PetCard key={cat.id} {...cat} petType={selectedTab.slice(0, -1)} />)}
      {data && hasNextPage && <InfiniteScrollObserver cb={fetchNextPage} />}
    </div>
  );
}

