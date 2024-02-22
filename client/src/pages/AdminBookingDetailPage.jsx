import SideBar from "../components/agent/SideBar";
import BookingDetail from "../components/agent/Bookingdetail";

function AdminBookingDetailPage() {
  return (
    <div className="flex">
      <SideBar />
      <BookingDetail/>
    </div>
  );
}
export default AdminBookingDetailPage;
