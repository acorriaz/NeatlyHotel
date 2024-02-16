export default function BookingPaymentHeader() {
  // TODO : Add Logic to change the color of the step number and text when it is active

  return (
    <div className="pt-[80px] m-auto max-w-[1120px]">
      <h1 className="font-serif text-[4.25rem] text-black">Booking Room</h1>
      <div className="mt-[20px] pb-10 flex gap-[60px] border-b-2">
        <div className="flex items-center gap-4">
          <div className="w-[66px] h-[66px] bg-orange500 rounded-md flex justify-center items-center font-inter font-semibold text-[2rem] text-white ">
            1
          </div>
          <p className="font-inter font-semibold text-orange500">
            Basic Information
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[66px] h-[66px] bg-orange500 rounded-md flex justify-center items-center font-inter font-semibold text-[2rem] text-white ">
            2
          </div>
          <p className="font-inter font-semibold text-orange500">
            Special Request
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[66px] h-[66px] bg-orange500 rounded-md flex justify-center items-center font-inter font-semibold text-[2rem] text-white ">
            3
          </div>
          <p className="font-inter font-semibold text-orange500">
            Payment Method
          </p>
        </div>
      </div>
    </div>
  );
}
