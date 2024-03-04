import SideBar from "../components/admin/SideBar";
import CustomerBooking from "../components/admin/CustumerBooking";
function AdminCustomerBookingPage () {
    return (
      <div className="flex">
        <SideBar pageName="customer-booking" />
        <CustomerBooking />
      </div>
    );
}

export default AdminCustomerBookingPage;