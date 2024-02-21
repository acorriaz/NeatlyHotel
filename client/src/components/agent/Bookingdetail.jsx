import NavBarAgent from "./NavbarAgent";
function BookingDetail() {
  return (
    <div className="w-full pl-[240px]">
      <NavBarAgent pageName="Kate Cho Premier Sea View" />
      <div className="my-[48px] mx-[60px] py-10 px-20 flex flex-col gap-20">
        <div>
          <p className="headline5 text-gray600">Customer name</p>
          <p className="body1 text-utilBlack font-fontWeight4">Kate Cho</p>
        </div>
        <div>
          <p className="headline5 text-gray600">Guest(s)</p>
          <p className="body1 text-utilBlack font-fontWeight4">2</p>
        </div>
        <div>
          <p className="headline5 text-gray600">Room type</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            Superior Garden View Room
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Amount</p>
          <p className="body1 text-utilBlack font-fontWeight4">1 room</p>
        </div>
        <div>
          <p className="headline5 text-gray600">Bed type</p>
          <p className="body1 text-utilBlack font-fontWeight4">Single bed</p>
        </div>
        <div>
          <p className="headline5 text-gray600">Check-in</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            Th, 19 Oct 2022
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Check-out</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            Fri, 20 Oct 2022
          </p>
        </div>
        <div>
          <p className="headline5 text-gray600">Stay (total)</p>
          <p className="body1 text-utilBlack font-fontWeight4">1 night</p>
        </div>
        <div>
          <p className="headline5 text-gray600">Booking date</p>
          <p className="body1 text-utilBlack font-fontWeight4">
            Tue, 16 Oct 2022
          </p>
        </div>
        <div className=" py-4 px-6">
          <p className="flex justify-end text-gray600">
            Payment success via <span>Credit Card - *888</span>
          </p>
          <div className=" test-utilBlack">
            <p className=" py-3 flex justify-between">
              <span>Superior Garden View Room</span>
              <span>2,500.00</span>
            </p>
            <p className=" py-3 flex justify-between">
              <span>Airport tranfer</span>
              <span>200.00</span>
            </p>
            <p className=" py-3 flex justify-between">
              <span>Promotion Code</span>
              <span>-400.00</span>
            </p>
            <p className=" py-3 flex justify-between">
              <span>Total</span>
              <span className="headline5">THB 2,300.00</span>
            </p>
          </div>
        </div>
        <div className=" py-4 px-6">
          <p>Additional Request</p>
          <p>Can i have some chocolate?</p>
        </div>
      </div>
    </div>
  );
}
export default BookingDetail;
