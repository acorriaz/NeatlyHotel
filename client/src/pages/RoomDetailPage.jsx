import ImageSlideRoom from "../components/room-detail/ImageSlideRoom"
import RoomCategories from "../components/room-detail/RoomCategories";
import OtherRoom from "../components/room-detail/OtherRoom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer"


function RoomDetail () {
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