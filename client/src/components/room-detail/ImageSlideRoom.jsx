import { useState , useEffect} from "react";

function ImageSlideRoom(props) {
  const [page,setPage] = useState(0);

  const imageRoom = props.image.map((img, index) => {
    return {
      id: index + 1,
      image: img.roomImage[0].imageUrl,
    };
  });

  const handlePrev = () => {
    setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : imageRoom.length - 1));
  };

  const handleNext = () => {
    setPage((prevPage) => (prevPage < imageRoom.length - 1 ? prevPage + 1 : 0));
  };
  //เหลือเก็บ optional ให้รูปเลื่อนเองโดยอัตโนมัติ
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [page]); 
  //
  return (
    <header className="relative w-full h-fit mt-20">
      {/* Carousel content */}
      <div className="carousel carousel-center w-full p-4 space-x-4">
        {imageRoom.map((item, index) => (

          <div
            id={item.id}
            key={index}
            className="carousel-item w-4/5"
          >
            <img
              src={item.image}
              className="w-full h-[580px]"
              alt={`Image ${item.id}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
        <a
          href={"#" + (page + 1)}
          onClick={(e) => {
            // e.preventDefault();
            handlePrev();
          }}
          className="btn btn-ghost rounded-full text-utilWhite border border-utilWhite bg-none"
        >
          &#129120;
        </a>
        <a
          href={"#" + (page + 1)}
          onClick={(e) => {
            // e.preventDefault();
            handleNext();
          }}
          className="btn btn-ghost rounded-full text-utilWhite border border-utilWhite bg-none"
        >
          &#129122;
        </a>
      </div>

      {/* Navigation dots */}
      <div className="absolute flex justify-center w-full py-2 gap-2 bottom-7">
        {imageRoom.map((item, index) => (
          <a
            href={"#" + (page + 1)}
            key={index}
            className={`w-2 h-2 border rounded-full ${
              page === index ? "bg-utilWhite" : "bg-gray500"
            }`}
            onClick={(e) => {
              // e.preventDefault();
              setPage(index);
            }}
          ></a>
        ))}
      </div>
    </header>
  );
}

export default ImageSlideRoom;
