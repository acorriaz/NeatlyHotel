import { Link } from "react-router-dom";

function ModelPopUp(massage) {
  return (
    <dialog id={massage.id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray500">
            ✕
          </button>
        </form>
        <h3 className="headline5 text-black font-inter">Cancel Booking</h3>
        <p className="py-4 body2">{massage.body}</p>
        <div className="flex gap-4 body3 w-full font-sans">
          <Link
            to={{
              pathname:massage.link
            }}
            state={massage.state}
            className="py-4 px-4 border border-orange500 bg-white rounded-md text-orange500 w-3/5"
          >
            {massage.confirm}
          </Link>
          <form method="dialog" className="w-2/5">
            <button className="py-4 px-2 bg-orange500 rounded-md text-white w-full">
              {massage.cancel}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModelPopUp;
