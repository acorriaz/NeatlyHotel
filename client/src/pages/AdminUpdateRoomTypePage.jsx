import SideBar from "../components/admin/SideBar";
import UpdateRoomType from "../components/admin-room/UpdateRoomType";

function AdminCreateRoomTypePage() {
  return (
    <div className="flex">
      <SideBar pageName="room-Property" />
      <UpdateRoomType />
    </div>
  );
}
export default AdminCreateRoomTypePage;
