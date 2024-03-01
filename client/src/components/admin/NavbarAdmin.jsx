import Search from "../../assets/admin/icon/search.png";
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

function NavBarAdmin(props){
  const navigate = useNavigate()
  const [Input, setInput] = useState("");

  if (props.showSearchInput) {
    const sendData = () => {
      props.getBackBooking(Input);
    };

    useEffect(() => {
      sendData();
    }, [Input]);
  }

    return (
      <nav className="bg-utilWhite min-h-20 px-14 py-4 flex gap-4 justify-between border relative top-0 left-0">
        {props.showSearchInput ? (
          <>
            <h1 className="headline5 w-full flex items-center">
              {props.pageName}
            </h1>
            <div className="flex gap-3 px-3 py-4 border border-gray400 rounded md:min-w-80">
              <img src={Search} alt="" width={24} />
              <input
                type="text"
                className="body1 h-6 w-full outline-none"
                placeholder="Search..."
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                value={Input}
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="w-full flex items-center">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="mr-4 font-fontWeight6 text-gray600 text-2xl"
              >
                &#129120;
              </button>
              <span className="headline5 font-fontWeight6 mr-4">
                {props.pageName.username}
              </span>
              <span className="w-full">{props.pageName.roomType}</span>
            </h1>
          </>
        )}
      </nav>
    );
}
export default NavBarAdmin;