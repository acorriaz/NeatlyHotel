import { Link } from "react-router-dom";
import { forwardRef } from "react";
import superiorGardenImg from "../../assets/landing-page-images/superior-garden-view1.jpg";
import superior from "../../assets/landing-page-images/superior1.jpg";
import deluxeImg from "../../assets/landing-page-images/deluxe1.jpg";
import suiteImg from "../../assets/landing-page-images/suite1.jpg";
import premierImg from "../../assets/landing-page-images/premier-sea-view1.jpg";
import supremeImg from "../../assets/landing-page-images/supreme1.jpg";
import Rooms from "./Rooms";

const RoomsAndSuits = forwardRef((props, ref) => {
  return (
    <div
      id="rooms"
      ref={ref}
      className="m-auto pt-28 pb-[11.125rem] max-w-[1200px]"
    >
      <h1 className="mb-[72px] font-noto-serif text-center text-[4.25rem] text-green800">
        Rooms & Suits
      </h1>
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Link to="/hotel/detail/1">
            <Rooms
              src={superiorGardenImg}
              alt="Superior Garden View"
              title="Superior Garden View"
              height="540px"
            />
          </Link>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-grow relative" style={{ flex: 3 }}>
            <Link to="/hotel/detail/2">
              <Rooms src={deluxeImg} alt="Deluxe Rooms" title="Deluxe" />
            </Link>
          </div>
          <div
            className="flex flex-grow relative max-h-full"
            style={{ flex: 2 }}
          >
            <Link to="/hotel/detail/3">
              <Rooms src={superior} alt="Superior" title="Superior" />
            </Link>
          </div>
        </div>

        <div className="h-[700px] flex relative gap-6">
          <div className="h-full flex" style={{ flex: 2 }}>
            <Link to="/hotel/detail/4">
              <Rooms
                src={premierImg}
                alt="Premier Sea View"
                title="Premier Sea View"
              />
            </Link>
          </div>
          <div
            className="h-full flex flex-col justify-center relative gap-6"
            style={{ flex: 3 }}
          >
            <div className="h-[338px] flex-1">
              <Link to="/hotel/detail/5">
                <Rooms src={supremeImg} alt="Supreme room" title="Supreme" />
              </Link>
            </div>
            <div className="h-[338px] flex-1">
              <Link to="/hotel/detail/6">
                <Rooms src={suiteImg} alt="Suite room" title="Suite" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RoomsAndSuits;
