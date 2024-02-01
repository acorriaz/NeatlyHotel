import { Link } from "react-router-dom";
import superiorGardenImg from "../../assets/landing-page-images/superior-garden-view.jpg";
import superior from "../../assets/landing-page-images/superior.jpg";
import deluxeImg from "../../assets/landing-page-images/deluxe.jpg";
import suiteImg from "../../assets/landing-page-images/suite.jpg";
import premierImg from "../../assets/landing-page-images/premier-sea-view.jpg";
import supremeImg from "../../assets/landing-page-images/supreme.jpg";
import Rooms from "./Rooms";

export default function RoomsAndSuits() {
  return (
    <div id="rooms" className="m-auto pt-28 pb-[11.125rem] max-w-[1200px]">
      <h1 className="mb-[72px] font-noto-serif text-center text-[4.25rem] text-green800">
        Rooms & Suits
      </h1>
      <div className="flex flex-col gap-6 h-[540px]">
        {/* TODO : Route to another page */}
        <div className="relative">
          <Link to="#">
            <Rooms
              src={superiorGardenImg}
              alt="Superior Garden View"
              title="Superior Garden View"
            />
          </Link>
        </div>

        {/* TODO : Add relative and absolute position */}
        <div className="flex gap-6 h-[700px]">
          <div className="flex flex-grow relative" style={{ flex: 3 }}>
            <Link to="#">
              <Rooms src={deluxeImg} alt="Deluxe Rooms" title="Deluxe" />
            </Link>
          </div>
          <div
            className="flex flex-grow relative max-h-full"
            style={{ flex: 2 }}
          >
            <Link to="#">
              <Rooms
                src={superior}
                alt="Superior"
                title="Superior"
                className="max-h-full"
              />
            </Link>
          </div>
        </div>

        <div className="h-[700px] flex relative gap-6">
          <div className="flex flex-grow" style={{ flex: 2 }}>
            <Link to="#">
              <Rooms
                src={premierImg}
                alt="Premier Sea View"
                title="Premier Sea View"
              />
            </Link>
          </div>
          <div
            className="h-[700px] flex flex-col relative gap-6"
            style={{ flex: 3 }}
          >
            <div className="flex flex-1 h-full" style={{ flex: 1 }}>
              <Link to="#" className="h-full">
                <Rooms
                  src={supremeImg}
                  alt="Supreme room"
                  title="Supreme"
                  className="max-h-full"
                />
              </Link>
            </div>
            <div className="flex flex-1 h-full" style={{ flex: 1 }}>
              <Link to="#" className="h-full">
                <Rooms
                  src={suiteImg}
                  alt="Suite room"
                  title="Suite"
                  className="h-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
