import { useState } from "react";

function ImageSlideRoom() {
  const [page,setPage] = useState(1);

  const imageRoom = [
    {
      id: 1,
      image:
        "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    },
    {
      id: 2,
      image:
        "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    },
    {
      id: 3,
      image:
        "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    },
    {
      id: 4,
      image:
        "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    },
    {
      id: 5,
      image:
        "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    },
  ];

  return (
    <header className="relative w-full h-fit mt-44">
      <div className="carousel carousel-center w-full p-4 space-x-4">
        {imageRoom.map((item, index) => {
          return (
            <div key={index} className="carousel-item w-4/5" id={item.id}>
              <img
                src={item.image}
                className="w-full h-[580px]"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
        {page > 1 ? (
          <a
            href={"#" + imageRoom[page - 1].id} onClick={() => setPage(page - 1)}
            className="btn btn-circle"
          > ❮ </a>
        ) : (
          <a href={"#" + imageRoom[page - 1].id} className="btn btn-circle"
          > ❮ </a>
        )}
        {page !== imageRoom.length ? (
          <a
            href={"#" + imageRoom[page - 1].id} onClick={() => setPage(page + 1)}
            className="btn btn-circle"
          > ❯ </a>
        ) : (
          <a
            href={"#" + imageRoom[page - 1].id}
            className="btn btn-circle"
          > ❯ </a>
        )}
      </div>
      <div className="absolute flex justify-center w-full py-2 gap-2 bottom-7">
        {imageRoom.map((item, index) => {
          let background = "gray-500"
          if (page === index + 1) {
            background = "white"
          }
          return (
            <a
              href={"#" + item.id}
              key={index}
              className= {`w-2 h-2 border rounded-full bg-${background}`}
            ></a>
          );
        })}
      </div>
    </header>
  );
}

export default ImageSlideRoom;
