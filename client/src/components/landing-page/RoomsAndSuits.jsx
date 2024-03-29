import { Link } from "react-router-dom";
import { forwardRef } from "react";
import superiorGardenImg from "../../assets/landing-page-images/superior-garden-view.jpg";
import superior from "../../assets/landing-page-images/superior.jpg";
import deluxeImg from "../../assets/landing-page-images/deluxe.jpg";
import suiteImg from "../../assets/landing-page-images/suite.jpg";
import premierImg from "../../assets/landing-page-images/premier-sea-view.jpg";
import supremeImg from "../../assets/landing-page-images/supreme.jpg";
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
          <Link to="/hotel/detail">
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
            <Link to="/hotel/detail">
              <Rooms src={deluxeImg} alt="Deluxe Rooms" title="Deluxe" />
            </Link>
          </div>
          <div
            className="flex flex-grow relative max-h-full"
            style={{ flex: 2 }}
          >
            <Link to="/hotel/detail">
              <Rooms src={superior} alt="Superior" title="Superior" />
            </Link>
          </div>
        </div>

        <div className="h-[700px] flex relative gap-6">
          <div className="h-full flex" style={{ flex: 2 }}>
            <Link to="/hotel/detail">
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
              <Link to="/hotel/detail">
                <Rooms src={supremeImg} alt="Supreme room" title="Supreme" />
              </Link>
            </div>
            <div className="h-[338px] flex-1">
              <Link to="/hotel/detail">
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
