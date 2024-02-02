import superiorGardenView from "../../assets/landing-page-images/superior-garden-view.jpg";

export default function LandingBooking() {
  return (
    <div
      className={
        "relative max-w-screen h-[900px] flex flex-col justify-center items-center gap-12"
      }
    >
      <img
        src={superiorGardenView}
        alt="superior-garden-view"
        className="absolute w-full h-full object-cover"
      />
      <h1 className="relative font-noto-serif text-white text-medium text-center text-[5rem]">
        A Best Place for Your <br />
        Neatly Experience
      </h1>
      <form className="relative p-11 w-[1200px] bg-white rounded-md flex justify-between items-end gap-4">
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="check_in" class="text-sm text-gray-900">
            Check In
          </label>
          <input
            type="date"
            id="check_in"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="check_out" class="text-sm text-gray-900">
            Check Out
          </label>
          <input
            type="date"
            id="check_out"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="w-[240px] flex flex-col justify-center gap-2">
          <label htmlFor="room-and-guests">Room & Guests</label>
          <select
            id="room-and-guests"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>1 Room, 1 Adult</option>
            <option>1 Room, 2 Adult</option>
          </select>
        </div>
        <button className="bg-orange600 text-white py-3 px-6 font-sans font-semibold rounded-md">
          Book Now
        </button>
      </form>
    </div>
  );
}
