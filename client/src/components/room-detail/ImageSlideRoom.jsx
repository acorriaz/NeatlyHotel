import { useState } from "react";

function ImageSlideRoom(props) {
  const [page, setPage] = useState(0);
  const [roomType, setRoomType] = useState(props.image);

  const thisImage = roomType.filter(
    (roomType) => roomType.roomTypeId === Number(props.param)
  )[0].roomImage.map((img, index) => {
    return {
      id: index + 1,
      image: img.imageUrl,
    };
  });

  const handlePrev = () => {
    setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : thisImage.length - 1));
  };

  const handleNext = () => {
    setPage((prevPage) => (prevPage < thisImage.length - 1 ? prevPage + 1 : 0));
  };

  return (
    <header className="relative w-full h-fit bg-utilBG mt-24">
      {/* Carousel content */}
      <div className="carousel carousel-center w-full p-16 space-x-4">
        {thisImage.map((item, index) => (
          <div id={item.id} key={index} className="carousel-item w-4/5">
            <img
              src={item.image}
              className="w-full h-[580px] object-cover"
              alt={`Image ${item.id}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
        <a
          href={"#" + (page + 1)}
          onClick={() => {
            handlePrev();
          }}
          className="btn btn-ghost rounded-full text-utilWhite border border-utilWhite bg-none"
        >
          &#129120;
        </a>
        <a
          href={"#" + (page + 1)}
          onClick={() => {
            handleNext();
          }}
          className="btn btn-ghost rounded-full text-utilWhite border border-utilWhite bg-none"
        >
          &#129122;
        </a>
      </div>

      {/* Navigation dots */}
      <div className="absolute flex justify-center w-full py-2 gap-2 bottom-20">
        {thisImage.map((item, index) => (
          <a
            href={"#" + (page + 1)}
            key={index}
            className={`w-2 h-2 border rounded-full ${
              page === index ? "bg-utilWhite" : "bg-gray500"
            }`}
            onClick={() => {
              setPage(index);
            }}
          ></a>
        ))}
      </div>
    </header>
  );
}

export default ImageSlideRoom;
