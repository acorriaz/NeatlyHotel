import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import axios from "axios"

function UpdateRoomType (props) {
  const location = useLocation()
  const { roomTypeId } = useParams()
  const [isPromotion, setIsPromotion] = useState(false);
  const [roomTypeFromDb, setRoomTypeFromDb] = useState({})
  const [roomTypeInput, setRoomTypeInput] = useState({roomAmenitie: []})
  const [newImages, setNewImages] = useState([]);
  const [newImagesPreviews, setNewImagesPreviews] = useState([]);

  useEffect(() => {
    if (roomTypeId) {
      console.log(roomTypeId)
      handleFetchRoomType(roomTypeId)
      console.log(roomTypeInput)
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(roomTypeInput).forEach(([key, value]) => {
        formData.append(key, value);
    });
    
    if (newImages) {
        newImages.forEach((file, index) => {
          formData.append('newRoomImage', file);
        })
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
        const response = await axios.post('http://localhost:4000/hotel/room', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response.data);
        // Handle response
    } catch (error) {
        console.error(error);
        // Handle error
    }
  };
  

  async function handleFetchRoomType(roomTypeId) {
      try {
        const response = await axios.get(`http://localhost:4000/hotel/room/${roomTypeId}`)
        if (response) {
          let data = response.data

          if (data.roomAmenitie && data.roomAmenitie.length === 0) {
            const newAmenity = {
              roomAmenitieId: Date.now(),
              roomAmenitieName: "",
            }

            data.roomAmenitie = [newAmenity]
          }

          setRoomTypeFromDb(data)
          setRoomTypeInput(data)
        }
      } catch (err) {
        console.error(err)
      }
  }

  async function handleInputChange(e) {
    const { name, value } = e.target
    setRoomTypeInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleRoomAmenityChange(e, amenityId) {
    const { value } = e.target
    
    const updatedAmenities = roomTypeInput.roomAmenitie.map((amenity) => {
      if (amenity.roomAmenitieId === amenityId) {
        return { ...amenity, roomAmenitieName: value}
      } else {
        return amenity
      }
    })

    setRoomTypeInput(prev => ({
      ...prev,
      roomAmenitie: updatedAmenities
    }))
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setNewImages(prev => [...prev, files]);
  
    const newImagePreviews = files.map(file => URL.createObjectURL(file));
    setNewImagesPreviews(prev => [...prev, newImagePreviews]);
  }

  function handleAddAmenity() {
    const newAmenity = {
      roomAmenitieId: Date.now(),
      roomAmenitieName: "",
    }

    setRoomTypeInput(prev => ({
      ...prev,
      roomAmenitie: [...prev.roomAmenitie, newAmenity]
    }))
  }

  function handleDeleteAmenity(amenityId) {
    setRoomTypeInput((prev) => {
      const updatedAmenities = prev.roomAmenitie.filter(amenity => amenity.roomAmenitieId !== amenityId)

      return {
        ...prev,
        roomAmenitie: updatedAmenities,
      }
    })
  }

  const amenityEl = () => {
    return roomTypeInput.roomAmenitie.map((amenity, index) => {
      return (
        <div key={amenity.roomAmenitieId} className="flex justify-center items-end gap-6">
          <div className="flex justify-center items-center text-2xl text-gray500">
            &#10303;
          </div>
          <label key={amenity.roomAmenitieId} className="flex flex-col gap-2 w-full">
            {index === 0 ? "Amenity *" : "Amenity"}
            <div className="border border-gray400 py-3 px-4 rounded">
              <input
                type="text"
                className="w-full"
                name={amenity.roomAmenitieId}
                value={amenity.roomAmenitieName}
                onChange={(e) => handleRoomAmenityChange(e, amenity.roomAmenitieId)}
                />
            </div>
          </label>
          <button
            className="font-sans text-gray500 font-fontWeight6"
            type="button"
            onClick={() => handleDeleteAmenity(amenity.roomAmenitieId)}
          >
            Delete
          </button>
        </div>
      )
    })
  }

  const mainImageEl = () => {
    if (roomTypeInput && roomTypeInput.roomImage && roomTypeInput.roomImage.length > 0) {
      return (
        <div
          className="bg-gray200 w-60 h-60 rounded flex justify-center items-center m-2"
          style={{
            backgroundImage: roomTypeInput
              ? `url(${roomTypeInput.roomImage[0].imageUrl})`
              : 'none',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}>
          <label className="text-center text-orange500 cursor-pointer">
            <input type="file" className="hidden" />
          </label>
        </div>
      )
    }
  }

  const imageGalleryEl = () => {
    if (roomTypeInput && roomTypeInput.roomImage && roomTypeInput.roomImage.length > 0) {
      return roomTypeInput.roomImage.map((img) => (
        <div
          key={img.roomImageId}
          className="bg-gray-200 w-60 h-60 rounded flex justify-center items-center m-2"
          style={{
            backgroundImage: `url(${img.imageUrl})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}>
            <label className="text-center text-orange500 cursor-pointer">
              <input type="file" className="hidden" />
            </label> 
        </div>
      ))
    }
  }

  const newImagesEl = () => {
    return newImagesPreviews.map((file, index) => (
      <div
        key={index} 
        className="bg-gray-200 w-60 h-60 rounded flex justify-center items-center m-2"
        style={{
          backgroundImage: `url(${file})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
      </div>
    ))
  }

  return (
    <form 
      className="w-full h-full bg-gray100 pb-10 relative top-0 left-0 z-0"
      onSubmit={(e) => handleSubmit(e)}
    >
      <nav className="w-full h-20 bg-utilWhite border border-gray300 flex justify-between items-center py-4 px-16">
        <h1 className="headline5 text-gray900">
          Update Room Detail
        </h1>
        <div className="flex gap-4 text-body1 font-sans font-fontWeight6">
          <button 
            className="w-[120px] h-14 border border-orange500 py-4 px-8 text-orange500 rounded-md"
            type="button"
            // TODO : onClick back to prev page
          >
            Cancel
          </button>
          <button 
            className="w-[120px] h-14 bg-orange600 py-4 px-8 text-utilWhite rounded-md"
            // TODO : onClick
          >
            Update
          </button>
        </div>
      </nav>
      <div className=" mt-10 mx-[60px] pt-10 pb-[60px] px-20 flex flex-col gap-10 bg-utilWhite rounded">
        <h1 className="headline5 text-gray600">Basic Information</h1>
        <label className="flex flex-col gap-2">
          Room Type *
          <div className="border border-gray400 py-3 px-4 rounded">
            <input
              className="w-full"
              type="text"
              name="roomTypeName"
              value={roomTypeInput.roomTypeName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </label>
        <div className="flex gap-10 w-full">
          <label className="flex flex-col gap-2 w-full">
            Room size(sqm) *
            <div className="border border-gray400 py-3 px-4 rounded">
              <input 
                className="w-full" 
                type="text" 
                name="roomSize" 
                value={roomTypeInput.roomSize}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </label>
          <label className="flex flex-col gap-2 w-full">
            Bed type *
            <div className="border border-gray400 py-3 px-4 rounded">
              <select className="w-full">
                <option value="#">Double Bed</option>
              </select>
            </div>
          </label>
        </div>
        <div className="flex gap-10 w-full">
          <label className="flex flex-col gap-2 w-full">
            Guest(s) *
            <div className="border border-gray400 py-3 px-4 rounded">
              <select className="w-full">
                <option value="#">2</option>
              </select>
            </div>
          </label>
          <label className="flex flex-col gap-2 w-full"></label>
        </div>
        <div className="flex gap-10 w-full">
          <label className="flex flex-col gap-2 w-full">
            Price per Night(THB) *
            <div className="border border-gray400 py-3 px-4 rounded">
              <input 
                className="w-full" 
                type="text" 
                name="roomPrice" 
                value={roomTypeInput.roomPrice}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </label>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between gap-5 h-full items-end w-full">
              <label className="w-1/4 text-center flex items-center justify-center">
                <input
                  type="checkbox"
                  className="mr-2 w-6 h-6 border border-gray300"
                  onChange={(e) => setIsPromotion(e.target.checked)}
                />
                Promotion Price
              </label>
              <div
                className={`border border-gray400 py-3 px-4 rounded w-3/4 ${
                  !isPromotion
                    ? "pointer-events-none bg-gray200"
                    : "bg-utilWhite"
                }`}
              >
                <input
                  className={`w-full ${
                    !isPromotion
                      ? "pointer-events-none bg-gray200"
                      : "bg-utilWhite"
                  } `}
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <label className="flex flex-col gap-2">
          Room Description *
          <div className="border border-gray400 py-3 px-4 rounded">
            <input 
              className="w-full h-[72px]" 
              type="text" 
              name="description" 
              value={roomTypeInput.description}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </label>
        <h1 className="headline5 text-gray600 border border-utilWhite border-t-gray300">
          Room Image
        </h1>
        <label className="flex flex-col gap-2">
          Main Image *
          <div className="w-full flex flex-wrap gap-6">
          {roomTypeInput && mainImageEl()}
          <div className="bg-gray200 w-60 h-60 rounded flex justify-center items-center m-2">
              <label className="text-center text-orange500 cursor-pointer">
                <input type="file" className="hidden" />
                <p className="text-2xl">+</p>
                <p>Upload photo</p>
              </label>
            </div>
          </div>
        </label>
        <label className="flex flex-col gap-2">
          Image Gallery(At least 4 pictures) *
          <div className="w-full flex flex-wrap gap-6">
            {setRoomTypeInput && imageGalleryEl()}
            {newImagesEl()}
            <div className="bg-gray200 w-60 h-60 rounded flex justify-center items-center m-2">
              <label className="text-center text-orange500 cursor-pointer">
                <input type="file" className="hidden" multiple onChange={(e) => handleFileChange(e)}/>
                <p className="text-2xl">+</p>
                <p>Upload photo</p>
              </label>
            </div>
          </div>
        </label>
        <h1 className="headline5 text-gray600 border border-utilWhite border-t-gray300">
          Room Amenities
        </h1>
        <div className="flex flex-col gap-6">
          {amenityEl()}
        </div>
        <button
          className="w-[180px] h-14 border border-orange500 py-4 px-8 text-orange500 rounded-md text-body1 font-sans font-fontWeight6"
          type="button"
          onClick={handleAddAmenity}
        >
          + Add Amenity
        </button>
      </div>
    </form>
  );
}

export default UpdateRoomType