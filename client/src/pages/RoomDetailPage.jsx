import ImageSlideRoom from "../components/room-detail/ImageSlideRoom";
import RoomCategories from "../components/room-detail/RoomCategories";
import OtherRoom from "../components/room-detail/OtherRoom";
<<<<<<< HEAD
import NavigationBar from "../components/navigation-bar/NavigationBar";
import Footer from "../components/Footer";
=======
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer"
import { useState, useEffect } from "react";

const getRoomDetail = async () => {
  
}
>>>>>>> 1945974 (feat: create API bookingHistory, fetch data form back-end and create bookingHistory feature)

function RoomDetail() {
  return (
    <>
      <NavigationBar />
      <ImageSlideRoom />
      <RoomCategories />
      <OtherRoom />
      <Footer />
    </>
  );
}

export default RoomDetail;
