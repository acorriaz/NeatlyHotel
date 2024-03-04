import SideBar from "../components/admin/SideBar";
import CreateRoomType from "../components/admin-room/CreateRoomType";

function AdminCreateRoomTypePage() {
  return (
    <div className="flex">
      <SideBar pageName="room-Property" />
      <CreateRoomType />
    </div>
  );
}
export default AdminCreateRoomTypePage;
