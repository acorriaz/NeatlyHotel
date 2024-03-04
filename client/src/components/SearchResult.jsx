import { useNavigate } from "react-router-dom";
import SearchBar from "./utils/SearchBar.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import { useSearchInput } from "./context/searchInputContext.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import expand from "../assets/searchResult/expand.svg";

function SearchResult() {
  const navigate = useNavigate();
  const { isAuthenticated, userData } = useAuth();
  const {
    searchInput,
    handleRoomAndGuestCount,
    handleInputDateChange,
    rooms,
    setRooms,
  } = useSearchInput();

  const [modalImageIndex, setModalImageIndex] = useState(0);

  function handlePaymentButtonClick(roomTypeId) {
    if (isAuthenticated === false) {
      navigate("/users/login");
    } else if (roomTypeId) {
      navigate("/users/payment", { state: { idFromSearch: roomTypeId } });
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

      const showPreviousImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
      };

      const showNextImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex + 1) % 7);
      };

      return (
        // result content
        <div
          className=" flex flex-col justify-center items-center bg-gray-100"
          key={room.roomTypeId}
        >
          {/* card-container */}
          <div className=" flex w-[1120px] h-[400px] justify-between items-center py-[25px] gap-[40px] border-b-2 border-b-gray-200">
            <div className="relative w-[453px] h-[320px]">
              <img
                src={room.roomImage[0].imageUrl}
                alt=""
                className=" w-[453px] h-[320px] rounded-md"
              />
              {/* full image view button */}
              <img
                src={expand}
                alt=""
                className="absolute z-10 bottom-0 left-0 w-[40px] h-[40px] border-transparent cursor-pointer hover:bg-gray-400 hover:rounded-tr hover:rounded-bl-md"
                onClick={() =>
                  document
                    .getElementById(`expand_image_${room.roomTypeId}`)
                    .showModal()
                }
              />
              <dialog
                id={`expand_image_${room.roomTypeId}`}
                className="modal"
                onClose={() => setModalImageIndex(0)}
              >
                <div className="modal-box relative w-11/12 max-w-full h-screen bg-black rounded-none px-0">
                  <form method="dialog">
                    <button className="btn btn-md btn-square btn-ghost text-2xl absolute right-1 top-1 text-gray-200 p-0">
                      ✕
                    </button>
                  </form>
                  <div className="carousel carousel-center w-full h-full flex justify-center items-center relative">
                    {room.roomImage.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === modalImageIndex ? "" : "hidden"
                        }`}
                      >
                        <img
                          src={image.imageUrl}
                          className="w-[700px] h-[500px] rounded-md"
                          alt=""
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <button
                            onClick={showPreviousImage}
                            className="btn btn-circle bg-transparent text-white"
                          >
                            ❮
                          </button>
                          <button
                            onClick={showNextImage}
                            className="btn btn-circle bg-transparent text-white"
                          >
                            ❯
                          </button>
                        </div>
                        <div className="absolute flex justify-center w-full py-2 gap-2 bottom-12 left-1/2 transform -translate-x-1/2">
                          {room.roomImage.map((_, index) => (
                            <a
                              href={`#${index + 1}`}
                              key={index}
                              className={`w-2 h-2 border rounded-full ${
                                modalImageIndex === index
                                  ? "bg-utilWhite"
                                  : "bg-gray500"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setModalImageIndex(index);
                              }}
                            ></a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </dialog>
            </div>
            {/* card-description */}
            <div className=" flex flex-col items-end w-[619px] h-[320px]">
              <div className=" flex justify-between w-[602px] h-[186px]">
                <div className="flex flex-col justify-between w-[314px] h-[178px]">
                  <div className="w-[314px] h-[74px] flex-col justify-between items-start">
                    <p className="text-headline4 font-semibold">
                      {room.roomTypeName}
                    </p>
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
              <div
                className="flex justify-end w-[619px] h-[48px] font-fontWeight6"
                key={room.roomTypeId}
              >
                <p>{`Available room : ${room.vacantCount}`}</p>
              </div>

              {/* button-panel */}
              <div className=" flex justify-end w-[619px] h-[48px] gap-[24px] font-fontWeight6">
                <div className="" key={room.roomTypeId}>
                  <button
                    className="btn text-orange-500"
                    onClick={() =>
                      document
                        .getElementById(`room_detail_${room.roomTypeId}`)
                        .showModal()
                    }
                  >
                    Room Detail
                  </button>
                  <dialog
                    id={`room_detail_${room.roomTypeId}`}
                    className="modal "
                    onClose={() => setModalImageIndex(0)}
                  >
                    <div className="modal-box w-10/12 max-w-5xl rounded-none pt-0">
                      <form method="dialog">
                        <div className=" h-[60px] flex items-center justify-between border-b-2 border-b-gray-200 ">
                          <h3 className="font-bold text-xl pl-[100px]">
                            {room.roomTypeName}
                          </h3>
                          <button className="btn btn-sm btn-square btn-ghost text-2xl">
                            ✕
                          </button>
                        </div>
                      </form>
                      <div className="carousel carousel-center pt-[20px] w-full px-[100px]">
                        {room.roomImage.map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item relative w-full justify-center ${
                              index === modalImageIndex ? "" : "hidden"
                            }`}
                          >
                            <img
                              src={image.imageUrl}
                              className="w-full h-[400px]"
                              alt=""
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <button
                                onClick={showPreviousImage}
                                className="btn btn-circle bg-transparent text-white"
                              >
                                ❮
                              </button>
                              <button
                                onClick={showNextImage}
                                className="btn btn-circle bg-transparent text-white"
                              >
                                ❯
                              </button>
                            </div>
                            {/* Navigation dots */}
                            <div className="absolute flex justify-center w-full py-2 gap-2 bottom-7">
                              {room.roomImage.map((_, index) => (
                                <a
                                  href={`#${index + 1}`}
                                  key={index}
                                  className={`w-2 h-2 border rounded-full ${
                                    modalImageIndex === index
                                      ? "bg-utilWhite"
                                      : "bg-gray500"
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setModalImageIndex(index);
                                  }}
                                ></a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* room description */}
                      <div className="px-[100px] my-[30px]">
                        <div className="flex w-full h-[50px] gap-[14px] font-fontWeight4 text-gray700 text-body1">
                          <p>{`${room.guestCapacity} Guests`}</p>
                          <p>|</p>
                          <p>{room.bedType.bedTypeName}</p>
                          <p>|</p>
                          <p>{`${room.roomSize} sqm`}</p>
                        </div>
                        <p className="w-full h-[72px] font-fontWeight4 text-gray700 text-body1 border-b-2 border-b-gray-200">
                          {room.description}
                        </p>
                        <div className="pt-[20px]">
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
                    </div>
                  </dialog>
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
        <div className="flex justify-center items-center h-fit w-full bg-white border-t-2 shadow-lg z-50">
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
