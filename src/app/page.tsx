import SearchForm from "@/app/components/SearchForm";
import SearchResults from "@/app/components/SearchResults";
import Tabs from "@/app/components/Tabs";

export default function Home() {
  return (
    <>
      <h1>Welcome to Cuidadex</h1>
      <p>Search and discover your favourite dogs and cats!</p>
      <Tabs />
      <SearchForm />
      <SearchResults />
    </>
  );
}
