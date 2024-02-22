import SideBar from "../components/agent/SideBar";
import CustomerBooking from "../components/agent/CustumerBooking";
function AdminCustomerBookingPage () {
    return (
      <div className="flex">
        <SideBar />
        <CustomerBooking />
      </div>
    );
}

export default AdminCustomerBookingPage