import ImageSlideRoom from "../components/roomDetail/ImageSlideRoom"
import RoomCategories from "../components/roomDetail/RoomCategories"
import OtherRoom from "../components/roomDetail/OtherRoom";
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