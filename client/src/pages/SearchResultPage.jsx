import SearchResult from "../components/SearchResult";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import CheckInBar from "../components/CheckInBar";
import Footer from "../components/Footer";

function SearchResultPage() {
  return (
    <>
      <NavigationBar />
      <CheckInBar />
      <SearchResult />
      <Footer />
    </>
  );
}

export default SearchResultPage;
