import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <div className="h-[1024px] w-60 bg-green-800 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[40px] text-center text-base text-green-400 font-body1 border-r-[1px] border-solid border-gray-300 mq1050:hidden">
      <div className="self-stretch flex flex-col items-center justify-end py-10 px-6 gap-[16px]">
        <img
          className="w-[120px] h-[32.3px] relative"
          loading="eager"
          alt=""
          src="/logo.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[150%]">
          Admin Panel Control
        </div>
      </div>
      <div className="self-stretch h-[540px] flex flex-col items-start justify-start text-left text-green-300 mq450:h-[540px]">
        <div className="self-stretch bg-green-600 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap text-green-100">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/iconbooking.svg"
          />
          <Link
            to="/admin-customer-booking"
            className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium"
          >
            Customer Booking
          </Link>
        </div>
        <div className="bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/iconmanage.svg"
          />
          <Link
            to="/room-management"
            className="relative tracking-[-0.02em] leading-[150%] font-medium"
          >
            Room Management
          </Link>
        </div>
        <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/iconhotel.svg"
          />
          <Link
            to="/hotel-information"
            className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium"
          >
            Hotel Information
          </Link>
        </div>
        <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/iconroom.svg"
          />
          <Link
            to="/room-and-property"
            className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium"
          >
            Room & Property
          </Link>
        </div>
      </div>
      <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] border-t-[1px] border-solid border-green-700">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/iconlogout.svg"
        />
        <input
          className="w-[calc(100%_-_72px)] [border:none] [outline:none] font-medium font-body1 text-base bg-[transparent] h-6 flex-1 relative tracking-[-0.02em] leading-[150%] text-green-300 text-left inline-block min-w-[91px]"
          placeholder="Log Out"
          type="text"
        />
      </div>
    </div>
  );
};

export default SideBarAdmin;
