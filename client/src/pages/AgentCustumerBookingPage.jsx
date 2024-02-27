import SideBar from "../components/agent/SideBar";
import CustomerBooking from "../components/agent/CustumerBooking";
function AgentCustomerBookingPage () {
    return (
      <div className="flex">
        <SideBar />
        <CustomerBooking />
      </div>
    );
}

export default AgentCustomerBookingPage;