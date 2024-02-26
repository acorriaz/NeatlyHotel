import { useState } from "react";

export const StatusPicker = () => {
  const [status, setStatus] = useState(status);

  const handleSelect = (status) => {
    setStatus(status);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-[212px] h-[45px] px-[16px] py-[12px] border-1 border-gray-200 focus:border-gray-500 outline-none transition"
        placeholder="Search Status..."
      />
      <div className="absolute mt-1 w-full p-2 bg-white shadow-lg max-h-36 overflow-y-auto font-semibold">
        <ul>
          <li
            onClick={() => handleSelect("Vacant")}
            className="text-green-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-gray-200"
          >
            Vacant
          </li>
          <li
            onClick={() => handleSelect("Occupied")}
            className="text-blue-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-gray-100"
          >
            Occupied
          </li>
          <li
            onClick={() => handleSelect("Assign Clean")}
            className="text-green-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-blue-100"
          >
            Assign Clean
          </li>
          <li
            onClick={() => handleSelect("Assign Dirty")}
            className="text-red-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-yellow-100"
          >
            Assign Dirty
          </li>
          <li
            onClick={() => handleSelect("Vacant Clean")}
            className="text-green-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-blue-200"
          >
            Vacant Clean
          </li>
          <li
            onClick={() => handleSelect("Vacant Clean Inspected")}
            className="text-yellow-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-yellow-100"
          >
            Vacant Clean Inspected
          </li>
          <li
            onClick={() => handleSelect("Vacant Clean Pick Up")}
            className="text-green-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-blue-200"
          >
            Vacant Clean Pick Up
          </li>
          <li
            onClick={() => handleSelect("Occupied Clean")}
            className="text-blue-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-blue-100"
          >
            Occupied Clean
          </li>
          <li
            onClick={() => handleSelect("Occupied Clean Inspected")}
            className="text-yellow-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-yellow-100"
          >
            Occupied Clean Inspected
          </li>
          <li
            onClick={() => handleSelect("Occupied Dirty")}
            className="text-red-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-red-100"
          >
            Occupied Dirty
          </li>
          <li
            onClick={() => handleSelect("Out of Order")}
            className="text-gray-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-gray-200"
          >
            Out of Order
          </li>
          <li
            onClick={() => handleSelect("Out of Service")}
            className="text-gray-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-gray-200"
          >
            Out of Service
          </li>
          <li
            onClick={() => handleSelect("Out of Inventory")}
            className="text-gray-700 w-fit mt-[8px] rounded-[5px] px-[12px] py-[4px] bg-gray-200"
          >
            Out of Inventory
          </li>
        </ul>
      </div>
    </div>
  );
};
