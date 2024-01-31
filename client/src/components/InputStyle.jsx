const InputStyle = ({ email, containerInputPlaceholder }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-gray-900 font-body1">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 relative leading-[150%] inline-block max-w-full">
          {email}
        </div>
      </div>
      <div className="self-stretch rounded bg-utility-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[17px] pl-[11px] max-w-full border-[1px] border-solid border-gray-400">
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-start justify-start font-body1 text-base text-lightslategray min-w-[250px] max-w-full"
          placeholder={containerInputPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputStyle;
