import axios from "axios";
import { useEffect, useState } from "react";
import { inputErrorBorder, inputErrorIcon } from "../utils/InputErrorStyles";

function EditPriceModal({
  visible,
  onClose,
  room,
  onSubmit,
  updateRoomState,
  updatePromotionPrice,
  currentPromotionPrice,
}) {
  const [roomPrice, setRoomPrice] = useState(room?.roomPrice);
  const [promotionPrice, setPromotionPrice] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentPromotionPrice !== undefined) {
      setPromotionPrice(currentPromotionPrice.toString());
    }
  }, [currentPromotionPrice]);

  if (!visible) return null;

  const checkPrice = () => {
    const newErrors = {};
    if (!roomPrice) {
      newErrors.roomPrice = "Room price is required";
    }
    return newErrors;
  };

  const handleRoomPriceUpdate = async () => {
    const formErrors = checkPrice();
    if (Object.keys(formErrors).length === 0) {
      try {
        await axios.put(`http://localhost:4000/hotel/${room?.roomTypeId}`, {
          roomPrice,
        });
        await updateRoomState();
        onClose();
      } catch (error) {
        console.error("Failed to update", error);
        alert("Failed to update");
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRoomPriceUpdate();
    const numericPromotionPrice = Number(promotionPrice);

    // Check if the input is a number and not NaN (which results from invalid conversions)
    if (!isNaN(numericPromotionPrice)) {
      updatePromotionPrice(room.roomTypeId, numericPromotionPrice);
    }
  };

  return (
    <>
      <div
        id="container"
        onClick={onClose}
        className="fixed inset-0 bg-utilBlack bg-opacity-10 drop-shadow-md flex justify-center items-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-utilWhite p-10 rounded relative"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-3">
              <div className="relative">
                <label className="body1">
                  Room Price
                  <br></br>
                  <input
                    name="roomPrice"
                    id="roomPrice"
                    type="text"
                    pattern="\d*"
                    value={roomPrice}
                    className={inputErrorBorder(errors, "roomPrice")}
                    onChange={(e) => setRoomPrice(Number(e.target.value))}
                  />
                  {inputErrorIcon(errors, "roomPrice")}
                </label>
              </div>
              <div className="relative">
                <label className="body1">
                  Promotion Price
                  <br></br>
                  <input
                    name="roomPromotionPrice"
                    id="roomPromotionPrice"
                    type="text"
                    pattern="\d*"
                    value={promotionPrice}
                    className={inputErrorBorder(errors, "roomPromotionPrice")}
                    onChange={(e) => setPromotionPrice(e.target.value)}
                  />
                  {inputErrorIcon(errors, "roomPromotionPrice")}
                </label>
              </div>
            </div>

            <div className="flex justify-around">
              <button
                type="submit"
                className="btn bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mt-5"
              >
                Update Price
              </button>
              <button
                type="button"
                onClick={() => onClose()}
                className="btn bg-gray200 hover:bg-gray500 hover:text-gray200 active:bg-gray700 active:text-gray200 text-body1 text-gray600 font-fontWeight6 mt-5"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditPriceModal;
