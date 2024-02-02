const TopBar = () => {
  return (
    <header className="self-stretch bg-utility-white box-border flex flex-row items-center justify-start py-4 px-[60px] gap-[16px] top-[0] z-[99] sticky max-w-full text-left text-xl text-gray-900 font-body1 border-b-[1px] border-solid border-gray-300 lg:pl-[30px] lg:pr-[30px] lg:box-border">
      <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block max-w-full whitespace-nowrap">
        Customer Booking
      </div>
      <div className="w-80 flex flex-row items-start justify-start"></div>
    </header>
  );
};

export default TopBar;
