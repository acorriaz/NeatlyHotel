import { useState } from "react";
import { Link } from "react-router-dom";

function OtherRoom (props) {
  const [roomDetail, setRoomDetail] = useState(props.room);
  
  const roomData = roomDetail.filter(
    (room) => room.room_type_id !== props.param
  );

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <section className="w-full h-[660px] flex justify-center content-center p-24">
      <div className="w-4/5 h-[455px] flex flex-col justify-between">
        <h1 className="headline3 text-utilBlack text-center">Other Room</h1>
        <div className="w-full h-[340px] flex gap-6">
          {roomData.splice(getRandomInt(roomData.length - 1) , 2).map((otherRoom, index) => {
            return (
              <div key={index} className="relative w-2/4 h-[340px]">
                <img
                  src={otherRoom.room_image_url}
                  alt="image"
                  className="w-full h-[340px]"
                />
                <div className="absolute bottom-10 left-12 text-utilWhite">
                  <p className="headline3 text-utilWhite mb-6">
                    {otherRoom.room_type}
                  </p>
                  <Link
                    to={"/hotel/detail/" + otherRoom.room_type_id}
                    className="sans"
                  >
                    Explore Rooms &#129122;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
   
}

export default OtherRoom;