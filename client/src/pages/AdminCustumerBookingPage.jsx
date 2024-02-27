import SideBar from "../components/admin/SideBar";
import CustomerBooking from "../components/admin/CustumerBooking";
function AdminCustomerBookingPage () {
    return (
      <div className="flex">
        <SideBar />
        <CustomerBooking />
      </div>
    );
}

export default AdminCustomerBookingPage;