import { useNavigate } from "react-router-dom";
import SearchBar from "./utils/SearchBar.jsx";
import { useAuth } from "../components/hooks/useAuth.jsx";
import { useSearchInput } from "../components/context/searchInputContext.jsx";
import { useEffect } from "react";
import axios from "axios";

function SearchResult() {
  const navigate = useNavigate()
  const { isAuthenticated, userData } = useAuth();
  const {
    searchInput,
    handleRoomAndGuestCount,
    handleInputDateChange,
    rooms,
    setRooms,
  } = useSearchInput();

  function handlePaymentButtonClick(roomTypeId) {
    if ( roomTypeId ) {
      navigate("/users/payment", { state: { idFromSearch: roomTypeId}})
    }
  }

  const searchRoom = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/hotel/rooms/${searchInput.guest}`
      );
      console.log(result);
      setRooms(result.data);
    } catch (error) {
      console.error("Error searching rooms:", error);
    }
  };

  // currency format logic
  const options = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  useEffect(() => {
    searchRoom();
  }, []);

  useEffect(() => {
    roomCard();
  }, [rooms]);

  const roomCard = () => {
    return rooms.map((room) => {
      const discount = room.roomPrice + 500;
      return (
        // result content
        <div
          className=" flex flex-col justify-center items-center bg-gray-100"
          key={room.roomTypeId}
        >
          {/* card-container */}
          <div className=" flex w-[1120px] h-[400px] justify-between items-center py-[25px] gap-[40px] border-b-2 border-b-gray-200">
            <div className="image-container relative w-[453px] h-[320px]">
              <img
                src={room.roomImage[0].imageUrl}
                alt=""
                className=" w-[453px] h-[320px] rounded-md"
              />

              {/* full image view button */}
              <button
                className="btn absolute z-0 bottom-0 left-0 w-[40px] h-[40px] bg-transparent border-transparent"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <img
                  src={room.icon}
                  alt=""
                  className="absolute z-10 bottom-0 left-0 w-[40px] h-[40px] border-transparent"
                />
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-[1440px] h-[1024px] bg-black flex justify-center">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-[60px] h-[60px] text-gray-200">
                      ✕
                    </button>
                  </form>
                  <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                        className="rounded-box"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                        className="rounded-box"
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
                    <div id="slide3" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                        className="rounded-box"
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
                    <div id="slide4" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                        className="rounded-box"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide5" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                        className="rounded-box"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide6" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                        className="rounded-box"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide7" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide7" className="carousel-item relative w-full">
                      <img
                        src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                        className="rounded-box"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">
                          ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
              {/* end of full image view button */}
            </div>
            {/* card-description */}
            <div className=" flex flex-col items-end w-[619px] h-[320px]">
              {/* card text */}
              <div className=" flex justify-between w-[602px] h-[186px]">
                {/* card content */}
                <div className="flex flex-col justify-between w-[314px] h-[178px]">
                  <div className="w-[314px] h-[74px] flex-col justify-between items-start">
                    <p className="text-headline4 font-semibold">
                      {room.roomTypeName}
                    </p>
                    {/* room detail */}
                    <div className="flex w-[400px] h-[24px] justify-start items-start gap-[10px] font-fontWeight3 text-gray700 text-body1">
                      <p>{`${room.guestCapacity} Guests`}</p>
                      <p>|</p>
                      <p>{room.bedType.bedTypeName}</p>
                      <p>|</p>
                      <p>{`${room.roomSize} sqm`}</p>
                    </div>
                  </div>
                  <p className="w-[314px] h-[72px] font-fontWeight4 text-gray700 text-body1">
                    {room.description}
                  </p>
                </div>
                {/* card-price */}
                <div className=" flex flex-col justify-start w-[260px] h-[186px]">
                  <div className="w-[260px] h-[58px] flex flex-col items-end">
                    <p className="text-gray700 line-through">
                      THB {discount.toLocaleString("en-US", options)}
                    </p>
                    <p className="text-headline5 font-semibold">
                      THB {room.roomPrice.toLocaleString("en-US", options)}
                    </p>
                  </div>
                  <div className="w-[260px] h-[48px] flex flex-col items-end text-gray700">
                    <span>Per Night</span>
                    <span>(Including Taxes & Fees)</span>
                  </div>
                </div>
              </div>
              {/* end of card text */}
              <div
                className="flex justify-end w-[619px] h-[48px] font-fontWeight6"
                key={room.roomTypeId}
              >
                <p>{`Available room : ${room.vacantCount}`}</p>
              </div>
              {/* button-panel */}
              <div className=" flex justify-end w-[619px] h-[48px] gap-[24px] font-fontWeight6">
                <div className="" key={room.roomTypeId}>
                  {/* room detail pop-up button */}
                  <button
                    className="btn text-orange-500"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Room Detail
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-[1200px] h-[620px]">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">{room.roomTypeName}</h3>
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
                      {/* room description */}
                      <div className=" flex w-full h-[50px] gap-[16px] font-fontWeight4 text-gray700 text-body1">
                        <p>{`${room.guestCapacity} Guests`}</p>
                        <p>|</p>
                        <p>{room.bedType.bedTypeName}</p>
                        <p>|</p>
                        <p>{`${room.roomSize} sqm`}</p>
                      </div>
                      <p className="w-full h-[72px] font-fontWeight4 text-gray700 text-body1">
                        {room.description}
                      </p>
                      <div>
                        <h2 className="headline5 text-utilBlack">
                          Room Amenities
                        </h2>
                        <div className="flex gap-32 body1 text-gray700 mt-4">
                          <ul>
                            <li>Safe in Room </li>
                            <li>Air Conditioning </li>
                            <li>High speed internet connection </li>
                            <li>Hairdryer </li>
                            <li>Shower </li>
                            <li>Bathroom amenities</li>
                            <li>Lamp </li>
                          </ul>
                          <ul>
                            <li>Minibar </li>
                            <li>Telephone </li>
                            <li>Ironing board </li>
                            <li>A floor only accessible via a guest </li>
                            <li>room key </li>
                            <li>Alarm clock</li>
                            <li>Bathrobe </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </dialog>
                  {/* end of room detail pop-up button */}
                </div>
                  <button 
                    className="py-3 px-8 rounded font-sans font-semibold text-white bg-orange-600"
                    onClick={() => handlePaymentButtonClick(room.roomTypeId)}
                  >
                      Book Now
                  </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  console.log("isAuthenticated", isAuthenticated, userData);

  if (rooms.length > 0) {
    return (
      <div className="flex flex-col justify-start items-center pt-[100px] bg-gray-100">
        {/* search result main container */}
        <div className="flex justify-center items-center h-fit w-full bg-white border-t-2 shadow-lg">
          <SearchBar />
        </div>
        <div className=" flex flex-col justify-start items-center mb-[200px] w-full bg-gray-100 mt-[100px]">
          {roomCard()}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-start items-center pt-[100px] bg-gray-100">
        {/* search result main container */}
        <div className="flex justify-center items-center h-fit w-full bg-white border-t-2 shadow-lg">
          <SearchBar />
        </div>
        <div className="flex justify-center items-center w-full h-[400px] mt-10 text-5xl">
          <p>Loading rooms</p>
        </div>
      </div>
    );
  }
}

export default SearchResult;
