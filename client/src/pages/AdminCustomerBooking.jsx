import { useCallback } from "react";
import { Input } from "@chakra-ui/react";

const AdminCustomerBooking = () => {
  const onTableContainerClick = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer1Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer2Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer3Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer4Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer5Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer6Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer7Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer8Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  const onTableContainer9Click = useCallback(() => {
    // Please sync "(admin) customer booking" to the project
  }, []);

  return (
    <div className="w-full relative bg-utility-white overflow-hidden flex flex-row items-start justify-start tracking-[normal] text-center text-base text-green-400 font-body1 mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
      <div className="h-[1024px] w-60 bg-green-800 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[40px] border-r-[1px] border-solid border-gray-300 mq1050:hidden">
        <div className="self-stretch flex flex-col items-center justify-end py-10 px-6 gap-[16px]">
          <img
            className="w-[120px] h-[32.3px] relative"
            loading="eager"
            alt=""
            src="src/assets/logo.png"
          />
          <div className="relative tracking-[-0.02em] leading-[150%]">
            Admin Panel Control
          </div>
        </div>
        <div className="self-stretch h-[540px] flex flex-col items-start justify-start text-left text-green-300 mq450:h-[540px]">
          <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap text-green-100">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="src/assets/booking.svg"
            />
            <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
              Customer Booking
            </div>
          </div>
          <div className="bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/src/assets/manage.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[150%] font-medium">
              Room Management
            </div>
          </div>
          <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/src/assets/hotel.svg"
            />
            <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">
              Hotel Information
            </div>
          </div>
          <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] whitespace-nowrap">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/src/assets/room.svg"
            />
            <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-medium">{`Room & Property`}</div>
          </div>
        </div>
        <div className="self-stretch bg-green-800 flex flex-row items-start justify-start p-6 gap-[16px] border-t-[1px] border-solid border-green-700">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/src/assets/logout.svg"
          />
          <input
            className="w-[calc(100%_-_72px)] [border:none] [outline:none] font-medium font-body1 text-base bg-[transparent] h-6 flex-1 relative tracking-[-0.02em] leading-[150%] text-green-300 text-left inline-block min-w-[91px]"
            placeholder="Log Out"
            type="text"
          />
        </div>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_240px)] mq1050:max-w-full">
        <header className="self-stretch bg-utility-white box-border flex flex-row items-center justify-start py-4 px-[60px] gap-[16px] top-[0] z-[99] sticky max-w-full text-left text-xl text-gray-900 font-body1 border-b-[1px] border-solid border-gray-300 lg:pl-[30px] lg:pr-[30px] lg:box-border">
          <div className="flex-1 relative tracking-[-0.02em] leading-[150%] font-semibold inline-block max-w-full whitespace-nowrap">
            Customer Booking
          </div>
          <div className="w-80 flex flex-row items-start justify-start">
            <div className="flex-1 rounded bg-utility-white flex flex-row items-center justify-start py-3 pr-[17px] pl-[15px] gap-[10px] border-[1px] border-solid border-gray-400">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="src/assets/search.svg"
              />
              <input
                className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-body1 text-base bg-[transparent] h-6 flex-1 relative tracking-[-0.02em] leading-[150%] text-gray-600 text-left flex items-center min-w-[152px]"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
        </header>
        <section className="self-stretch h-[944px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-center p-12 box-border max-w-full text-justify text-base text-utility-black font-body1 lg:pl-6 lg:pr-6 lg:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[31px] mq1050:pb-[31px] mq1050:box-border">
          <div className="flex-1 rounded overflow-x-auto flex flex-col items-start justify-start py-0 px-3 box-border max-w-full">
            <div className="w-[1080px] bg-gray-300 overflow-x-auto flex flex-row items-start justify-start text-sm text-gray-800">
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
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainerClick}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <Input variant="filled" type="dateTime-local" />
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer1Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer2Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <Input variant="filled" type="dateTime-local" />
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer3Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer4Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer5Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer6Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer7Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer8Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[1080px] bg-utility-white box-border flex flex-row items-start justify-start cursor-pointer border-b-[1px] border-solid border-gray-300"
              onClick={onTableContainer9Click}
            >
              <div className="overflow-x-auto flex flex-row items-start justify-start max-w-full">
                <div className="w-[180px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Kate Cho
                  </div>
                </div>
                <div className="w-24 shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    2
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[25px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Superior Garden View
                  </div>
                </div>
                <div className="w-[86px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    1
                  </div>
                </div>
                <div className="w-[167px] shrink-0 flex flex-row items-center justify-start py-6 px-4 box-border">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Single Bed
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-8 pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Th, 19 Oct 2022
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-6 pr-[52px] pl-4">
                  <div className="relative tracking-[-0.02em] leading-[150%] whitespace-nowrap">
                    Fri, 20 Oct 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminCustomerBooking;
