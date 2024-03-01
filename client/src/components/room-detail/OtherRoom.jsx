import { useState } from "react";
import { Link } from "react-router-dom";

function OtherRoom(props) {
  const [roomDetail, setRoomDetail] = useState(props.room);

  const roomData = roomDetail.filter(
    (room) => room.roomTypeId !== Number(props.param)
  );

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <section className="w-full h-[660px] flex justify-center content-center p-24  bg-green200">
      <div className="w-3/5 h-[455px] flex flex-col justify-between">
        <h1 className="headline3 text-utilBlack text-center">Other Room</h1>
        <div className="w-full h-[340px] flex gap-6">
          {roomData
            .splice(getRandomInt(roomData.length - 1), 2)
            .map((otherRoom, index) => {
              return (
                <div key={index} className="relative w-2/4 h-[340px]">
                  <img
                    src={otherRoom.roomImage[0].imageUrl}
                    alt="image"
                    className="w-full h-[340px] brightness-75"
                  />
                  <div className="absolute bottom-10 left-12 text-utilWhite">
                    <p className="headline3 text-utilWhite mb-6">
                      {otherRoom.roomTypeName}
                    </p>
                    <Link
                      to={"/hotel/detail/" + otherRoom.roomTypeId}
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
