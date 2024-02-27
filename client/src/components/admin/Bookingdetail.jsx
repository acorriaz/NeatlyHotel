import NavBarAdmin from "./NavbarAdmin";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function BookingDetail() {
  const location = useLocation();
  const [booking, setBooking] = useState(location.state.booking);
  
  //แสดงวันที่แบบ ชื่อวัน วันที่ ชื่อเดือน และปี
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
  //หาระยะห่างของวัน checkin และ วัน checkout
  const differenceDate = () => {
    let timeStart = new Date(booking.checkIn).getTime();
    let timeEnd = new Date(booking.checkOut).getTime();
    let differenceInTime = timeEnd - timeStart;
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };  

  return (
    <div className="w-full h-full bg-gray100 pb-10 relative top-0 left-0 z-0">
      <NavBarAdmin
        pageName={ {username : booking.user.username , roomType : booking.room.roomType.roomTypeName}}
      />
      <div className=" mt-10 mx-[60px] pt-10 pb-[60px] px-20 flex flex-col gap-20 bg-utilWhite rounded">
        <div>
          <p className="headline5 text-gray600">Customer name</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {booking.user.username}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Guest(s)</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {booking.room.roomType.guestCapacity}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Room type</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {booking.room.roomType.roomTypeName}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Amount</p>
          <p className="body1 text-utilBlack font-fontWeight4">1 room</p>
        </div>
        <div>
          <p className="headline5 text-gray600">Bed type</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {booking.room.roomType.bedType.bedTypeName}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Check-in</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {formatDate(booking.checkIn)}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Check-out</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {formatDate(booking.checkOut)}
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Stay (total)</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {differenceDate()} night
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Booking date</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            {formatDate(booking.createdAt)}
          </p>
        </div>
        <div className=" py-4 px-6 bg-gray100">
          <p className="flex justify-end text-gray600">
            Payment success via
            <span className="ml-4">{booking.paymentMethod} - *888</span>
          </p>
          <div className=" test-utilBlack">
            <p className=" py-3 flex justify-between">
              <span>{booking.room.roomType.bedType.bedTypeName}</span>
              <span>{booking.room.roomType.roomPrice.toLocaleString()}</span>
            </p>
            {booking.guestRequest &&
              booking.guestRequest.map((req, index) => {
                return (
                  <p key={index} className=" py-3 flex justify-between">
                    <span>{req.request.requestName}</span>
                    <span>{req.request.requestPrice.toLocaleString()}</span>
                  </p>
                );
              })}
            <p className=" py-3 flex justify-between">
              <span>Promotion Code</span>
              <span>0</span>
            </p>
            <p className=" py-3 flex justify-between border border-gray100 border-t-gray300">
              <span>Total</span>
              <span className="headline5">
                THB {booking.totalPrice.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
        <div className=" py-4 px-6 bg-gray300 text-gray700 ">
          <p className="font-fontWeight6">Additional Request</p>
          <p>Can i have some chocolate?</p>
        </div>
      </div>
    </div>
  );
}
export default BookingDetail;
