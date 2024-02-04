import superiorImg from "../../assets/landing-page-images/superior.jpg";
import deluxeImg from "../../assets/landing-page-images/deluxe.jpg";
import suiteImg from "../../assets/landing-page-images/suite.jpg";
import supremeImg from "../../assets/landing-page-images/supreme.jpg";
import superiorGardenImg from "../../assets/landing-page-images/superior-garden-view.jpg";
import premierImg from "../../assets/landing-page-images/premier-sea-view.jpg";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default () => {
  const items = [
    { img: superiorImg, title: "Superior Room" },
    { img: deluxeImg, title: "Deluxe Room" },
    { img: suiteImg, title: "Suite Room" },
    { img: supremeImg, title: "Supreme Room" },
    { img: superiorGardenImg, title: "Superior Garden View" },
    { img: premierImg, title: "Premier Sea View" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="m-auto max-w-[1440px]"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.img}
            alt={item.title}
            className="h-[500px] w-[400px] object-cover"
          />
        </SwiperSlide>
      ))}
      <GoArrowRight className="swiper-button-next text-white w-[56px] h-[56px] border-[1px] p-2 border-white rounded-full flex items-center justify-center mr-[4rem]" />
      <GoArrowLeft className="swiper-button-prev text-white w-[56px] h-[56px] border-[1px] p-2 border-white rounded-full flex items-center justify-center ml-[4rem]" />
    </Swiper>
  );
};
