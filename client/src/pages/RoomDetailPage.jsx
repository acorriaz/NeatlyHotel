import ImageSlideRoom from "../components/room-detail/ImageSlideRoom";
import RoomCategories from "../components/room-detail/RoomCategories";
import OtherRoom from "../components/room-detail/OtherRoom";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RoomDetail() {
  const [roomType, setRoomType] = useState();
  const param = useParams();

  const getRoomDetail = async () => {
    try {
      const roomType = await axios.get("http://localhost:4000/roomdetail");
      setRoomType(roomType.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomDetail();
  }, []);

  if (roomType) {
    return (
      <>
        <NavigationBar />
        <ImageSlideRoom image={roomType} />
        <RoomCategories room={roomType} param={param.roomTypeId} />
        <OtherRoom room={roomType} param={param.roomTypeId} />
        <Footer />
      </>
    );
  }
}

export default RoomDetail;
