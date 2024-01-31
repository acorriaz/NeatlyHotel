import SearchResult from "../components/SearchResult";

function SearchResultPage() {
  return (
    <div className="search-result-container flex-col h-max w-max justify-start items-center">
      <SearchResult />
      <div className="footer"></div>
    </div>
  );
}

export default SearchResultPage;
