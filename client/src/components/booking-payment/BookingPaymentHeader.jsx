export default function BookingPaymentHeader({ currentSection }) {
  // TODO : Add Logic to change the color of the step number and text when it is active

  function classNameForStep(step) {
    if (currentSection === step) {
      return {
        sectionIndicator:
          "w-[66px] h-[66px] bg-orange500 rounded-md flex justify-center items-center font-inter font-semibold text-[2rem] text-white",
        sectionText: "font-inter font-semibold text-orange500",
      };
    } else if (currentSection > step) {
      return {
        sectionIndicator:
          "w-[66px] h-[66px] bg-orange100 rounded-md flex justify-center items-center font-inter font-semibold text-[2rem] text-orange500 ",
        sectionText: "font-inter font-semibold text-black",
      };
    } else {
      return {
        sectionIndicator:
          "w-[66px] h-[66px] bg-gray200 rounded-md flex justify-center items-center font-inter font-semibold text-[2rem] text-gray600 ",
        sectionText: "font-inter font-semibold text-gray600",
      };
    }
  }

  return (
    <div className="pt-[80px] m-auto max-w-[1120px] bg-utilBG">
      <h1 className="font-serif text-[4.25rem] text-black">Booking Room</h1>
      <div className="mt-[20px] pb-10 flex gap-[60px] border-b-2">
        <div className="flex items-center gap-4">
          <div className={classNameForStep(1).sectionIndicator}>1</div>
          <p className={classNameForStep(1).sectionText}>Basic Information</p>
        </div>
        <div className="flex items-center gap-4">
          <div className={classNameForStep(2).sectionIndicator}>2</div>
          <p className={classNameForStep(2).sectionText}>Special Request</p>
        </div>
        <div className="flex items-center gap-4">
          <div className={classNameForStep(3).sectionIndicator}>3</div>
          <p className={classNameForStep(3).sectionText}>Payment Method</p>
        </div>
      </div>
    </div>
  );
}
