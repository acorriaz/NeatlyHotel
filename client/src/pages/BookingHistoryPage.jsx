import NavigationBar from "../components/navigation-bar/NavigationBar";
import Footer from "../components/Footer";
import BookingHistory from "../components/booking-history-page/BookingHistory";
import { useAuth } from "../components/hooks/useAuth";

function BookingHistoryPage() {
  const { userData } = useAuth();

  return (
    <>
      <NavigationBar />
      <BookingHistory />
      <Footer />
    </>
  );
}

export default BookingHistoryPage;
