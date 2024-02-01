import SearchResult from "../components/SearchResult";
import NavigationBar from "../components/NavigationBar";
import CheckInBar from "../components/CheckInBar";

function SearchResultPage() {
  return (
    <div className="search-result-container flex-col justify-start items-center">
      <NavigationBar />
      <CheckInBar />
      <SearchResult />
      <div className="footer"></div>
    </div>
  );
}

export default SearchResultPage;
