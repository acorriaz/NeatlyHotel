import { Link } from "react-router-dom";

function CardBooking(props) {
  //แสดงวันที่แบบ ชื่อย่อวัน วันที่ ชื่อย่อเดือน ปี
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
    const formattedDate = `${dayName}, ${day} ${monthNames[monthIndex]} ${year}`;
    return formattedDate;
  };
  //แปลงวันเวลาเป็น milliseconds
  const isShowsWithDate = (checkIn) => {
    let toDay = new Date();
    let checkInDay = new Date(checkIn);
    let result = checkInDay.getTime() - toDay.getTime();
    result = Math.round(result / 3600000 + 7); //แปลง milliseconds เป็นชั่วโมง
    return result;
  };
  //โชว์โมเดลเมื่อทำการกดปุ่ม cancel booking
  const showModal = () => {
    document
      .getElementById(
        isShowsWithDate(props.data.checkIn) >= 24
          ? "modelCancelAndRefund"
          : "modelCancel"
      )
      .showModal();
    sendBackBooking();
  };
  
  //ส่งข้อมูล booking ที่เลือกกลับไปยัง parrant component booking history
  const sendBackBooking = () => {
    props.sendBooking(props.data);
  };

  return (
    <>
      <div className="py-10 bg-gray100">
        <div className="flex gap-12">
          <div className="w-[500px] h-[215px]">
            <img
              src={props.data.room.roomType.roomImage[0].imageUrl}
              alt={props.data.room.roomType.roomTypeName}
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="w-full flex flex-col justify-between pb-4">
            <div className="flex justify-between font-inter">
              <span className="headline4 text-utilBlack">
                {props.data.room.roomType.roomTypeName}
              </span>
              <span className="text-gray600">
                Booking date: {formatDate(props.data.createdAt)} <br />
                {props.data.cancelledAt
                  ? `Cancellation date: ${formatDate(props.data.cancelledAt)}`
                  : ""}
              </span>
            </div>
            <div className="flex gap-12 text-gray800 w-full font-inter my-6">
              <div>
                <p className="font-fontWeight6">Check-in</p>
                <span className="font-fontWeight4 mr-2">
                  {formatDate(props.data.checkIn)}
                </span>
                |<span className="font-fontWeight4 ml-2">After 2:00 PM</span>
              </div>
              <div>
                <p className="font-fontWeight6">Check-out</p>
                <span className="font-fontWeight4 mr-2">
                  {formatDate(props.data.checkOut)}
                </span>
                |<span className="font-fontWeight4 ml-2">Before 12:00 AM</span>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-gray200 text-orange500 font-sans font-fontWeight6">
              <input type="radio" name="roomDetail" />
              <div className="collapse-title">
                <p className="text-gray900 my-2">Booking Detail</p>
              </div>
              <div className="collapse-content text-gray700 font-inter font-fontWeight4">
                <div>
                  <div className="pb-5">
                    <p className="flex justify-between w-full pb-6">
                      {props.data.room.roomType.guestCapacity} Guests (1 Night)
                      <span>
                        Payment success via
                        <span className="pl-2 font-fontWeight6">
                          {props.data.paymentMethod}
                        </span>
                      </span>
                    </p>
                    <p className="flex justify-between w-full py-2">
                      {props.data.room.roomType.roomTypeName}
                      <span className="pl-2 text-gray900 font-fontWeight6">
                        {props.data.room.roomType.roomPrice}
                      </span>
                    </p>
                    {props.data.guestRequest.map((req, index) => {
                      return (
                        <p
                          key={index}
                          className="flex justify-between w-full py-2 "
                        >
                          {req.request.requestName}
                          <span className="pl-2 text-gray900 font-fontWeight6">
                            {req.request.requestPrice}
                          </span>
                        </p>
                      );
                    })}
                    <p className="flex justify-between w-full py-2">
                      Promotion Code
                      <span className="pl-2 text-gray900 font-fontWeight6"></span>
                    </p>
                  </div>
                  <p className="flex justify-between w-full py-10 border border-gray200 border-t-gray400">
                    Total
                    <span className="headline5 pl-2 text-gray900 font-fontWeight6">
                      THB {props.data.totalPrice}
                    </span>
                  </p>
                </div>
                <div className="py-4 bg-gray300">
                  <p className="text-gray900 font-fontWeight6">
                    Additional Request
                  </p>
                  <p className="font-fontWeight4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!props.data.cancelledAt && isShowsWithDate(props.data.checkIn) >= 0 && (
          <div className="w-full flex justify-between font-sans font-fontWeight6">
            <button className="text-orange500 px-2" onClick={showModal}>
              Cancel Booking
            </button>
            <div>
              <Link to={`/hotel/detail/${props.data.room.roomType.roomTypeId}`}>
                <button className="py-4 px-8 text-orange500">
                  Room Detail
                </button>
              </Link>
              {isShowsWithDate(props.data.checkIn) >= 24 && (
                <Link
                  to="/users/booking-history/change-date"
                  state={{ data: props.data }}
                >
                  <button className="py-4 px-8 bg-orange600 text-utilWhite rounded-md">
                    Change Date
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardBooking;
