import SearchResult from "../components/SearchResult";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import Footer from "../components/Footer";
import SearchBar from "../components/utils/SearchBar";

function SearchResultPage() {
  return (
    <>
      <NavigationBar />
      <SearchBar />
      <SearchResult />
      <Footer />
    </>
  );
}

export default SearchResultPage;
