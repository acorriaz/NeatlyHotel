import ImageSlideRoom from "../components/roomDetail/ImageSlideRoom"
import RoomCategories from "../components/roomDetail/roomCategories"
import OtherRoom from "../components/roomDetail/otherRoom";
import NavigationBar from "../components/NavigationBar";


function RoomDetail () {
  return (
    <>
      <NavigationBar />
      <ImageSlideRoom />
      <RoomCategories />
      <OtherRoom />
      {/* <Footer /> */}
    </>
  );
}

export default RoomDetail;