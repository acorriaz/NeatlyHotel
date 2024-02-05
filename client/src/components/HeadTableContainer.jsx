const HeadTableContainer = () => {
  return (
    <div className="w-[1080px] bg-gray-300 overflow-x-auto flex flex-row items-start justify-start text-justify text-sm text-gray-800 font-body1">
      <div className="w-[180px] shrink-0 flex flex-row items-start justify-start py-2.5 px-4 box-border">
        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
          Customer name
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-2.5 px-4">
        <div className="relative tracking-[-0.02em] leading-[150%] font-medium">
          Guest(s)
        </div>
      </div>
      <div className="w-[200px] shrink-0 flex flex-row items-start justify-start py-2.5 px-4 box-border">
        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
          Room type
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-2.5 px-4">
        <div className="relative tracking-[-0.02em] leading-[150%] font-medium">
          Amount
        </div>
      </div>
      <div className="w-[167px] shrink-0 flex flex-row items-start justify-start py-2.5 px-4 box-border">
        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
          Bed Type
        </div>
      </div>
      <div className="w-[165px] shrink-0 flex flex-row items-start justify-start py-2.5 px-4 box-border">
        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
          Check-in
        </div>
      </div>
      <div className="w-[186px] flex flex-row items-start justify-start py-2.5 px-4 box-border">
        <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
          Check-out
        </div>
      </div>
    </div>
  );
};

export default HeadTableContainer;
