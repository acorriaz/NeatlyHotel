import { Link } from "react-router-dom";
import ModelPopUp from "./ModelPopup";

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

  if (props.data) {
    return (
      <>
        <div className="py-10 bg-gray300">
          <div className="flex gap-12">
            <div className="w-[500px] h-[200px]">
              <img
                src={props.data.room_id.room_type_id.room_image_url}
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="w-full flex flex-col justify-between pb-4">
              <div className="flex justify-between font-inter">
                <span className="headline4 text-utilBlack">
                  {props.data.room_id.room_type_id.room_type}
                </span>
                <span className="text-gray600">
                  Booking date: {formatDate(props.data.created_at)}
                </span>
              </div>
              <div className="flex gap-12 text-gray800 w-full font-inter my-6">
                <div>
                  <p className="font-fontWeight6">Check-in</p>
                  <span className="font-fontWeight4 mr-2">
                    {formatDate(props.data.check_in)}
                  </span>
                  |<span className="font-fontWeight4 ml-2">After 2:00 PM</span>
                </div>
                <div>
                  <p className="font-fontWeight6">Check-out</p>
                  <span className="font-fontWeight4 mr-2">
                    {formatDate(props.data.check_out)}
                  </span>
                  |
                  <span className="font-fontWeight4 ml-2">Before 12:00 AM</span>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-gray200 text-orange500 font-sans font-fontWeight6">
                <input type="radio" name="roomDetail" />
                <div className="collapse-title">
                  <p className="text-gray900 my-2 mx-4">Booking Detail</p>
                </div>
                <div className="collapse-content text-gray700 font-inter font-fontWeight4">
                  <p className="flex justify-between w-full pb-6">
                    {props.data.room_id.room_type_id.guest_number} Guests (1
                    Night)
                    <span>
                      Payment success via
                      <span className="pl-2 font-fontWeight6">
                        {props.data.payment_method}
                      </span>
                    </span>
                  </p>
                  <p className="flex justify-between w-full py-2">
                    {props.data.room_id.room_type_id.room_type}
                    <span className="pl-2 text-gray900 font-fontWeight6">
                      {props.data.room_id.room_type_id.room_price}
                    </span>
                  </p>
                  {props.data.request.map((req, index) => {
                    return (
                      <p
                        key={index}
                        className="flex justify-between w-full py-2 "
                      >
                        {req.request_id.request_name}
                        <span className="pl-2 text-gray900 font-fontWeight6">
                          {req.request_id.request_price}
                        </span>
                      </p>
                    );
                  })}
                  <p className="flex justify-between w-full py-2">
                    Promotion Code
                    <span className="pl-2 text-gray900 font-fontWeight6">
                    </span>
                  </p>
                  <p className="flex justify-between w-full py-2">
                    Total
                    <span className="headline5 pl-2 text-gray900 font-fontWeight6">
                      THB {props.data.total_price}
                    </span>
                  </p>
                  <div className="py-4 px-6">
                    <p className=" text-gray900 font-fontWeight6">
                      Additional Request
                    </p>
                    <p className="font-fontWeight4">
                      {props.data.additional_request}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between font-sans font-fontWeight6">
            <button
              className="text-orange500 px-2"
              onClick={() =>
                document
                  .getElementById(
                    isShowsWithDate(props.data.check_in) >= 24
                      ? "modelCancelAndRefund"
                      : "modelCancel"
                  )
                  .showModal()
              }
            >
              Cancel Booking
            </button>
            <div>
              <button className="py-4 px-8 text-orange500">Room Detail</button>
              {isShowsWithDate(props.data.check_in) >= 24 && (
                <Link
                  to={{
                    pathname: `/users/booking-history/change-date/${props.data.booking_detail_id}`,
                  }}
                  state={{ data: props.data }}
                >
                  <button className="py-4 px-8 bg-orange600 text-utilWhite rounded-md">
                    Change Date
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <ModelPopUp
          id={"modelCancelAndRefund"}
          body={"Are you sure you would like to cancel this booking?"}
          confirm={"Yes, I want to cancel and request refund"}
          cancel={"No, Don’t Cancel"}
        />
        <ModelPopUp
          id={"modelCancel"}
          body={"Are you sure you would like to cancel this booking?"}
          confirm={"Yes, I want to cancel"}
          cancel={"No, Don’t Cancel"}
        />
      </>
    );
  }
}

export default CardBooking;
