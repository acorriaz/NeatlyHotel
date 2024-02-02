export default function Review() {
  return (
    <div className="m-auto py-40 bg-green200">
      <div className="m-auto max-w-[1200px]">
        <h1 className="mb-12 font-noto-serif font-medium text-[4.25rem] text-green800 text-center">
          Our Customer Says
        </h1>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="m-auto w-full flex flex-col justify-center item">
              <p className="m-auto max-w-[70%] font-inter text-xl text-semibold text-center text-green700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto voluptates laudantium libero praesentium, est
                sapiente earum facilis nisi porro blanditiis error minima!
                Veniam quasi provident laboriosam ullam expedita, nihil
                doloremque.
              </p>
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/60.jpg"
                  alt="Author"
                  className="mt-10 w-8 h-8 rounded-full object-cover"
                />
                <p className="mt-10 text-gray600">Katherine, Company</p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="m-auto w-full">
              <p className="m-auto max-w-[70%] font-inter text-xl text-semibold text-center text-green700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto voluptates laudantium libero praesentium, est
                sapiente earum facilis nisi porro blanditiis error minima!
                Veniam quasi provident laboriosam ullam expedita, nihil
                doloremque.
              </p>
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/64.jpg"
                  alt="Author"
                  className="mt-10 w-8 h-8 rounded-full object-cover"
                />
                <p className="mt-10 text-gray600">John, Company</p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="m-auto w-full">
              <p className="m-auto max-w-[70%] font-inter text-xl text-semibold text-center text-green700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto voluptates laudantium libero praesentium, est
                sapiente earum facilis nisi porro blanditiis error minima!
                Veniam quasi provident laboriosam ullam expedita, nihil
                doloremque.
              </p>
              <div className="flex justify-center items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/60.jpg"
                  alt="Author"
                  className="mt-10 w-8 h-8 rounded-full object-cover"
                />
                <p className="mt-10 text-gray600">Doe, Company</p>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center w-full py-2 gap-2">
          <a href="#slide1" className="btn btn-xs">
            1
          </a>
          <a href="#slide2" className="btn btn-xs">
            2
          </a>
          <a href="#slide3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
}
