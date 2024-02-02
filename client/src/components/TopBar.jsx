const TopBar = () => {
  return (
    <header className="self-stretch bg-white box-border flex flex-row items-center justify-start py-4 px-[60px] gap-[16px] top-[0] z-[99] sticky max-w-full text-left text-xl text-gray-900 font-body1 border-b-[1px] border-solid border-gray-300 lg:pl-[30px] lg:pr-[30px] lg:box-border">
      <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block max-w-full whitespace-nowrap">
        Customer Booking
      </div>
      <div className="w-80 flex flex-row items-start justify-start">
        <div className="flex-1 rounded bg-utility-white flex flex-row items-center justify-start py-3 pr-[17px] pl-[15px] gap-[10px] border-[1px] border-solid border-gray-400">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/search.svg"
          />
          <input
            className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-body1 text-base bg-[transparent] h-6 flex-1 relative tracking-[-0.02em] leading-[150%] text-gray-600 text-left flex items-center min-w-[152px]"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
