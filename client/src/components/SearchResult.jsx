import seeImage from "../assets/images/searchResult/seeImage.svg";
import { rooms as roomData } from "../data/rooms.js";

let rooms = [...roomData];
function SearchResult() {
  return (
    <>
      {rooms.map((room) => {
        return (
          <div
            className="result-container flex-col justify-center items-center bg-gray-300"
            key={room.id}
          >
            <div className="card-container flex w-[1120px] h-[400px] justify-between items-center py-[20px] gap-[40px] border-b-1 border-gray-300">
              <div className="image-container relative">
                <img src={room.photo} alt="" className="w-[453px] h-[320px]" />
                <img src={seeImage} alt="" className="absolute z-10" />
              </div>
              <div className="card-description flex-col w-[619px] h-[320px]">
                <div className="card-text flex justify-between w-[602px] h-[186px]">
                  <div className="card-content flex-col justify-between w-[314px] h-[178px]">
                    <div className="w-[314px] h-[74px] flex-col justify-between items-start">
                      <p className="text-[28px] font-semibold">{room.title}</p>
                      <div className="room-description flex w-[289px] h-[24px] gap-[16px]">
                        {room.detail.map((detail) => {
                          return (
                            <p className="text-[16px] text-gray-700 font-normal">
                              {detail}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <p className="w-[314px] h-[72px] text-[16px] text-gray-700 font-normal">
                      {room.description}
                    </p>
                  </div>
                  <div className="card-price flex-col justify-start w-[260px] h-[186px]">
                    <div className="w-[260px] h-[58px] flex-col items-end">
                      <p>THB {room.discount}</p>
                      <p className="header">THB {room.price}</p>
                    </div>
                    <p className="w-[260px] h-[48px] flex justify-end">
                      {room.priceDetails}
                    </p>
                  </div>
                </div>
                <div className="button-panel flex justify-end w-[619px] h-[48px]">
                  <button>Room Detail</button>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SearchResult;
