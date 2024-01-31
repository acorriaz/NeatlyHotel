import SearchResult from "../components/SearchResult";

function SearchResultPage() {
  return (
    <div className="search-result-container flex-col h-max ">
      <SearchResult />
      <div className="footer"></div>
    </div>
  );
}

export default SearchResultPage;
