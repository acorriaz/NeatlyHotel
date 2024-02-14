import SearchResult from "../components/SearchResult";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import Footer from "../components/Footer";
import LandingBooking from "../components/landing-page/LandingBooking";

function SearchResultPage() {
  return (
    <>
      <NavigationBar />
      <LandingBooking />
      <SearchResult />
      <Footer />
    </>
  );
}

export default SearchResultPage;
