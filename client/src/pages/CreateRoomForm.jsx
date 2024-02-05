import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateRoomForm() {
  const CreateARoomBar = () => {
    return (
      <div className="main-container flex w-[900px] h-[80px] pt-[16px] pr-[60px] pb-[16px] pl-[60px] gap-[16px] items-center flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4e6ed] relative mx-auto my-0">
        <span className="h-[30px] grow shrink-0 basis-auto font-['Inter'] text-[20px] font-semibold leading-[30px] text-[#2a2e3f] tracking-[-0.4px] relative text-left whitespace-nowrap">
          Create New Room
        </span>

        <button className="flex w-[116px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#e76b39] relative z-[1] pointer">
          <span className="flex w-[52px] h-[16px] justify-center items-start shrink-0 basis-auto font-['Open_Sans'] text-[16px] font-semibold leading-[16px] text-[#e76b39] relative text-center whitespace-nowrap z-[2]">
            <Link to="/room-and-property">Cancel</Link>
          </span>
        </button>
        <button className="flex w-[116px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#c14817] rounded-[4px] border-none relative z-[3] pointer">
          <span className="flex w-[52px] h-[16px] justify-center items-start shrink-0 basis-auto font-['Open_Sans'] text-[16px] font-semibold leading-[16px] text-[#fff] relative text-center whitespace-nowrap z-[4]">
            Create
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="main-container flex w-[1080px] pt-[40px] pr-[80px] pb-[60px] pl-[80px] flex-col gap-[40px] items-start flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#e4e6ed] relative mx-auto my-0">
      <CreateARoomBar />

      <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Inter'] text-[20px] font-semibold leading-[30px] text-[#99a0b8] tracking-[-0.4px] relative text-left whitespace-nowrap">
        Basic Information
      </span>
      <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
        <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[2]">
          <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[3]">
            Room Type *
          </span>
        </div>
        <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[4]">
          <input className="w-[920px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[6]" />
          <div className="flex h-[24px] pt-0 pr-0 pb-0 pl-0 items-start grow shrink-0 basis-0 flex-nowrap relative z-[5]" />
        </div>
      </div>
      <div className="flex gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[8]">
          <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
            <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-10">
              Room size(sqm) *
            </span>
          </div>
          <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[11]">
            <input className="w-[440px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[13]" />
            <div className="flex h-[24px] pt-0 pr-0 pb-0 pl-0 items-start grow shrink-0 basis-0 flex-nowrap relative z-[12]" />
          </div>
        </div>
        <div className="flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[14]">
          <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]">
            <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[16]">
              Bed type *
            </span>
          </div>
          <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[17]">
            <input className="w-[440px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[21]" />
            <div className="flex items-start grow shrink-0 basis-0 flex-nowrap relative z-[18]">
              <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[19]">
                Double bed
              </span>
            </div>
            <div className="w-[20px] h-[20px] shrink-0 bg-[url(../assets/images/d0e6c74b-4590-4ea2-a1dd-32aaa1027010.png)] bg-cover bg-no-repeat relative overflow-hidden z-20" />
          </div>
        </div>
      </div>
      <div className="flex w-[920px] gap-[40px] items-start shrink-0 flex-nowrap relative z-[22]">
        <div className="flex w-[440px] flex-col gap-[4px] items-start shrink-0 flex-nowrap relative z-[23]">
          <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[24]">
            <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[25]">
              Guest(s) *
            </span>
          </div>
          <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[26]">
            <input className="w-[440px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-30" />
            <div className="flex items-start grow shrink-0 basis-0 flex-nowrap relative z-[27]">
              <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[28]">
                2
              </span>
            </div>
            <div className="w-[20px] h-[20px] shrink-0 bg-[url(../assets/images/0788f1df-0416-40c0-ac92-2b2b75902caf.png)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] items-end self-stretch shrink-0 flex-nowrap relative z-[31]">
        <div className="flex w-[440px] flex-col gap-[4px] items-start shrink-0 flex-nowrap relative z-[32]">
          <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[33]">
            <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[34]">
              Price per Night(THB) *
            </span>
          </div>
          <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[35]">
            <input className="w-[440px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[37]" />
            <div className="flex h-[24px] pt-0 pr-0 pb-0 pl-0 items-start grow shrink-0 basis-0 flex-nowrap relative z-[36]" />
          </div>
        </div>
        <div className="flex gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[38]">
          <div className="flex w-[157px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[39]">
            <div className="w-[24px] h-[24px] shrink-0 bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative z-40" />
            <span className="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#646c89] relative text-left whitespace-nowrap z-[41]">
              Promotion Price
            </span>
          </div>
          <button className="flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap border-none relative z-[42] pointer">
            <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#f1f2f6] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[43]">
              <div className="flex h-[24px] pt-0 pr-0 pb-0 pl-0 items-start grow shrink-0 basis-0 flex-nowrap relative z-[44]" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[45]">
        <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
          <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[47]">
            Room Description *
          </span>
        </div>
        <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[48]">
          <input className="w-[920px] h-[96px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[51]" />
          <div className="flex items-start grow shrink-0 basis-0 flex-nowrap relative z-[49]">
            <span className="flex w-[892px] h-[72px] justify-start items-start grow shrink-0 basis-0 font-['Inter'] text-[16px] font-normal leading-[24px] text-[#000] relative text-left z-50">
              <br />
              <br />
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-0 pl-0 gap-[8px] items-start self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4e6ed] relative z-[52]">
        <span className="h-[30px] shrink-0 basis-auto font-['Inter'] text-[20px] font-semibold leading-[30px] text-[#99a0b8] tracking-[-0.4px] relative text-left whitespace-nowrap z-[53]">
          Room Image
        </span>
      </div>
      <div className="flex w-[920px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[54]">
        <span className="flex w-[920px] h-[24px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[55]">
          Main Image *
        </span>
        <div className="w-[240px] h-[240px] shrink-0 bg-[url(../assets/images/bef94547-dd20-4797-b0da-058934d37c56.png)] bg-cover bg-no-repeat rounded-[4px] relative z-[56]" />
      </div>
      <div className="flex w-[920px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[57]">
        <span className="flex w-[920px] h-[24px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[58]">
          Image Gallery(At least 4 pictures) *
        </span>
        <div className="flex w-[167px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[59]">
          <div className="w-[167px] h-[167px] shrink-0 bg-[#f1f2f6] rounded-[4px] relative z-[60]">
            <div className="flex w-[87px] flex-col gap-[8px] items-center flex-nowrap relative z-[61] mt-[59px] mr-0 mb-0 ml-[40px]">
              <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/b33cb2b3-4ba9-4ed6-b170-bd294c31da5f.png)] bg-cover bg-no-repeat relative overflow-hidden z-[62]" />
              <span className="h-[21px] shrink-0 basis-auto font-['Nunito'] text-[14px] font-medium leading-[21px] text-[#e76b39] relative text-left whitespace-nowrap z-[63]">
                Upload photo
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-0 pl-0 gap-[8px] items-start self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4e6ed] relative z-[64]">
        <span className="h-[30px] shrink-0 basis-auto font-['Inter'] text-[20px] font-semibold leading-[30px] text-[#99a0b8] tracking-[-0.4px] relative text-left whitespace-nowrap z-[65]">
          Room Amenities
        </span>
      </div>
      <div className="flex w-[920px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[66]">
        <div className="flex w-[920px] flex-col gap-[16px] justify-center items-center shrink-0 flex-nowrap relative z-[67]">
          <div className="flex gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[6px] relative overflow-hidden z-[68]">
            <div className="w-[26px] h-[76px] shrink-0 bg-[url(../assets/images/475ac2ac-0d3b-427c-8615-67533a5f49b1.png)] bg-cover bg-no-repeat relative overflow-hidden z-[69]" />
            <div className="flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[70]">
              <div className="flex gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[71]">
                <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#2a2e3f] relative text-left whitespace-nowrap z-[72]">
                  Amenitiy *
                </span>
              </div>
              <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#d6d9e4] relative overflow-hidden z-[73]">
                <input className="w-[779px] h-[48px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[76]" />
                <div className="flex items-start grow shrink-0 basis-0 flex-nowrap relative z-[74]">
                  <span className="h-[24px] grow shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#646c89] tracking-[-0.32px] relative text-left whitespace-nowrap z-[75]" />
                </div>
              </div>
            </div>
            <div className="flex w-[67px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[77]">
              <span className="flex w-[51px] h-[16px] justify-center items-start shrink-0 basis-auto font-['Open_Sans'] text-[16px] font-semibold leading-[16px] text-[#c8ccda] relative text-center whitespace-nowrap z-[78]">
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[277px] pt-0 pr-[50px] pb-0 pl-[50px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[79]">
        <button className="flex w-[177px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[4px] border-solid border border-[#e76b39] relative z-[80] pointer">
          <span className="flex w-[113px] h-[16px] justify-center items-start shrink-0 basis-auto font-['Open_Sans'] text-[16px] font-semibold leading-[16px] text-[#e76b39] relative text-center whitespace-nowrap z-[81]">
            + Add Amenity
          </span>
        </button>
      </div>
    </div>
  );
}
