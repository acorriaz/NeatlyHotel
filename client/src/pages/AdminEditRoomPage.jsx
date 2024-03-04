import SideBar from "../components/admin/SideBar";
import EditRoom from "../components/admin-room/EditRoom";

function AdminEditRoomPage() {
  return (
    <div className="flex">
      <SideBar pageName="room-management" />
      <EditRoom />
    </div>
  );
}
export default AdminEditRoomPage;
