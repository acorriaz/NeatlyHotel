import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios"

function CreateRoomType (props) {
    const location = useLocation()
    const { state } = location
    const [isPromotion, setIsPromotion] = useState(false);
    const [roomTypeFromDb, setRoomTypeFromDb] = useState({})
    const [roomAmenity, setRoomAmenity] = useState([])

    useEffect(() => {
      if (state.mode === "update") {
        handleFetchRoomType(state.roomTypeId)
      }
    }, [])

    async function handleFetchRoomType(roomTypeId) {
      if (roomTypeId) {
        try {
          const response = await axios.get(`http://localhost:4000/hotel/room/${roomTypeId}`)
          if (response) {
            setRoomTypeFromDb(response.data)
            setRoomAmenity(response.data.roomAmenitie)
            console.log(roomTypeFromDb)
          }
        } catch (err) {
          console.error(err)
        }
      }
    }

    async function handleInputChange(e) {
      const { name, value } = e.target
      setRoomTypeFromDb((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    function handleRoomAmenityChange(e) {
      const { name, value } = e.target
      
      setRoomAmenity((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    const mainImageEl = () => {
      if (roomTypeFromDb && roomTypeFromDb.roomImage && roomTypeFromDb.roomImage.length > 0) {
        return (
          <div 
            className="bg-gray200 w-60 h-60 rounded flex justify-center items-center"
            style={{
              backgroundImage: roomTypeFromDb
                ? `url(${roomTypeFromDb.roomImage[0].imageUrl})`
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
      // Check if roomTypeFromDb exists and roomImage array is not empty
      if (roomTypeFromDb && roomTypeFromDb.roomImage && roomTypeFromDb.roomImage.length > 0) {
        return roomTypeFromDb.roomImage.map((img) => (
              <div
                key={img.roomImageId} // Use roomImageId for unique key
                className="bg-gray-200 w-60 h-60 rounded flex justify-center items-center m-2" // Added m-2 for some margin
                style={{
                  backgroundImage: `url(${img.imageUrl})`, // Directly use imageUrl of each image
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                }}>
                  <label className="text-center text-orange500 cursor-pointer">
                    <input type="file" className="hidden" />
                  </label> 
              </div>
            ))}        
       }

    const amenityEl = () => {
      return roomAmenity.map((amenity, index) => {
        return (
          <div className="border border-gray400 py-3 px-4 rounded">
            <input 
              type="text" 
              className="w-full" 
              name={`amenity${index}`} 
              value={roomAmenity[index]}
              onChange={(e) => handleRoomAmenityChange(e)}
            />
          </div>
        )
      })
    }

    return (
      <div className="w-full h-full bg-gray100 pb-10 relative top-0 left-0 z-0">
        <nav className="w-full h-20 bg-utilWhite border border-gray300 flex justify-between items-center py-4 px-16">
          <h1 className="headline5 text-gray900">
            {state.mode === "update" ? "Update Room Detail" : "Create New Room"}
          </h1>
          <div className="flex gap-4 text-body1 font-sans font-fontWeight6">
            <button 
              className="w-[120px] h-14 border border-orange500 py-4 px-8 text-orange500 rounded-md"
            >
              Cancel
            </button>
            <button className="w-[120px] h-14 bg-orange600 py-4 px-8 text-utilWhite rounded-md">
              Create
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
                value={roomTypeFromDb.roomTypeName}
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
                  value={roomTypeFromDb.roomSize}
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
                  value={roomTypeFromDb.roomPrice}
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
                value={roomTypeFromDb.description}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </label>
          <h1 className="headline5 text-gray600 border border-utilWhite border-t-gray300">
            Room Image
          </h1>
          <label className="flex flex-col gap-2">
            Main Image *
            {roomTypeFromDb && mainImageEl()}
            <div className="bg-gray200 w-60 h-60 rounded flex justify-center items-center m-2">
                <label className="text-center text-orange500 cursor-pointer">
                  <input type="file" className="hidden" />
                  <p className="text-2xl">+</p>
                  <p>Upload photo</p>
                </label>
            </div>
          </label>
          <label className="flex flex-col gap-2">
            Image Gallery(At least 4 pictures) *
            <div className="w-full flex flex-wrap gap-6">
              {roomTypeFromDb && imageGalleryEl()}
              <div className="bg-gray200 w-60 h-60 rounded flex justify-center items-center m-2">
                <label className="text-center text-orange500 cursor-pointer">
                  <input type="file" className="hidden" />
                  <p className="text-2xl">+</p>
                  <p>Upload photo</p>
                </label>
              </div>
            </div>
          </label>
          <h1 className="headline5 text-gray600 border border-utilWhite border-t-gray300">
            Room Amenities
          </h1>
          <div className="flex gap-6">
            <div className="flex justify-center items-center text-2xl text-gray500">
              &#10303;
            </div>
            <label className="flex flex-col gap-2 w-full">
              Amenity *
              <div className="border border-gray400 py-3 px-4 rounded">
                <input type="text" className="w-full" />
              </div>
            </label>
            <button className="font-sans text-gray500 font-fontWeight6">
              Delete
            </button>
          </div>
          <button className="w-[180px] h-14 border border-orange500 py-4 px-8 text-orange500 rounded-md text-body1 font-sans font-fontWeight6">
            + Add Amenity
          </button>
        </div>
      </div>
    );
}

export default CreateRoomType