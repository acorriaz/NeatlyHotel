import { rooms as roomData } from "../data/rooms.js";
import { Link } from "react-router-dom";

let rooms = [...roomData];
function SearchResult() {
  const options = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return (
    <>
      {rooms.map((room) => {
        return (
          <div
            className="result-container flex flex-col justify-center items-center bg-gray-100"
            key={room.id}
          >
            <div className="card-container flex w-[1120px] h-[400px] justify-between items-center py-[20px] gap-[40px] border-b-2 border-b-gray-200">
              <div className="image-container relative w-[453px] h-[320px]">
                <img src={room.photo} alt="" className=" w-[453px] h-[320px]" />
                <button>
                  <img
                    src={room.icon}
                    alt=""
                    className="absolute z-10 bottom-0 left-0"
                  />
                </button>
              </div>
              <div className="card-description flex flex-col items-end w-[619px] h-[320px]">
                <div className="card-text flex justify-between w-[602px] h-[186px]">
                  <div className="card-content flex flex-col justify-between w-[314px] h-[178px]">
                    <div className="w-[314px] h-[74px] flex-col justify-between items-start">
                      <p className="text-headline4 font-semibold">
                        {room.title}
                      </p>
                      <div className="room-description flex w-[289px] h-[24px] gap-[16px] font-fontWeight4 text-gray700 text-body1">
                        {room.detail.map((detail) => {
                          return <p>{detail}</p>;
                        })}
                      </div>
                    </div>
                    <p className="w-[314px] h-[72px] font-fontWeight4 text-gray700 text-body1">
                      {room.description}
                    </p>
                  </div>
                  <div className="card-price flex flex-col justify-start w-[260px] h-[186px]">
                    <div className="w-[260px] h-[58px] flex flex-col items-end">
                      <p className="text-gray700 line-through">
                        THB {room.discount.toLocaleString("en-US", options)}
                      </p>
                      <p className="text-headline5">
                        THB {room.price.toLocaleString("en-US", options)}
                      </p>
                    </div>
                    <div className="w-[260px] h-[48px] flex flex-col items-end text-gray700">
                      <span>Per Night</span>
                      <span>(Including Taxes & Fees)</span>
                    </div>
                  </div>
                </div>
                <div className="button-panel flex justify-end w-[619px] h-[48px] gap-[24px] font-fontWeight6">
                  <div className="" key={room.id}>
                    <button
                      className="btn text-orange-500"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Room Detail
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box w-[800px] h-[620px]">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg">{room.title}</h3>
                        <div className="carousel w-full">
                          <div
                            id="slide1"
                            className="carousel-item relative w-full h-[400px]"
                          >
                            <img
                              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                              className="w-full h-[400px]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="btn btn-circle">
                                ❮
                              </a>
                              <a href="#slide2" className="btn btn-circle">
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide2"
                            className="carousel-item relative w-full h-[400px]"
                          >
                            <img
                              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                              className="w-full h-[400px]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">
                                ❮
                              </a>
                              <a href="#slide3" className="btn btn-circle">
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide3"
                            className="carousel-item relative w-full h-[400px]"
                          >
                            <img
                              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                              className="w-full h-[400px]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">
                                ❮
                              </a>
                              <a href="#slide4" className="btn btn-circle">
                                ❯
                              </a>
                            </div>
                          </div>
                          <div
                            id="slide4"
                            className="carousel-item relative w-full h-[400px]"
                          >
                            <img
                              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                              className="w-full h-[400px]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">
                                ❮
                              </a>
                              <a href="#slide1" className="btn btn-circle">
                                ❯
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="room-description flex w-full h-[24px] gap-[16px] font-fontWeight4 text-gray700 text-body1">
                          {room.detail.map((detail) => {
                            return <p>{detail}</p>;
                          })}
                        </div>
                        <p className="w-full h-[72px] font-fontWeight4 text-gray700 text-body1">
                          {room.description}
                        </p>
                      </div>
                    </dialog>
                  </div>
                  <button className="py-3 px-8 rounded font-sans font-semibold text-white bg-orange-600">
                    <Link to="/hotel/payment">Book Now</Link>
                  </button>
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
