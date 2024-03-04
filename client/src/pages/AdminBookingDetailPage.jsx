import SideBar from "../components/admin/SideBar";
import BookingDetail from "../components/admin/Bookingdetail";

function AdminBookingDetailPage() {
  return (
    <div className="flex">
      <SideBar pageName="customer-booking" />
      <BookingDetail />
    </div>
  );
}
export default AdminBookingDetailPage;
