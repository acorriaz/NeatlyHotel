import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabaseClient.js";
import chairBesidePool from "../assets/loginPageImage/chairBesidePool.jpg";
import { useNavigate } from "react-router-dom";

// check ว่าเป็น email ไหม
function isEmail(input) {
  return input.includes("@");
}

// หา email จาก username
async function getEmailFromUsername(username) {
  const { data, error } = await supabase
    .from("users")
    .select("email")
    .eq("username", username)
    .single();

  if (error) {
    console.error("Error fetching email", error);
    return null;
  }

  return data?.email;
}

// --login ของ user--
export function UserLoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmail(usernameOrEmail)) {
      try {
        const fetchedEmail = await getEmailFromUsername(usernameOrEmail);
        setUsernameOrEmail(fetchedEmail);
      } catch {
        alert("Login failed: Username or Email not found");
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: usernameOrEmail,
        password: userPassword,
      });
      if (error) throw error;
      navigate("/hotel");
    } catch (error) {
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <>
      <section className="flex h-screen bg-utilBG">
        {/* img div */}
        <div className="w-2/4">
          <img src={chairBesidePool} className="object-cover h-screen w-full" />
        </div>

        {/* login container div */}
        <div className="flex justify-center items-center w-2/4 pl-12 pr-40 pt-15 pb-30">
          <div className="flex-col bg-utilBG w-screen h-fit text-left">
            <h1 className="headline2 w-full mb-60 text-green800">Log In</h1>
            <div className="w-full">
              {/* form start here */}
              <form className="userLoginForm" onSubmit={handleSubmit}>
                <label
                  htmlFor="userUsernameOrEmail"
                  className="body1 text-gray900"
                >
                  Username or Email
                </label>
                <br></br>
                <input
                  id="usernameOrEmail"
                  name="userUsernameOrEmail"
                  type="text"
                  placeholder="Enter your username or email"
                  className="w-full mb-10 py-3 pl-3 pr-3 bg-utilWhite border rounded border-solid border-gray400 text-gray600 focus:border focus:border-orange500 invalid:border-utilRed"
                  onChange={(event) => {
                    setUsernameOrEmail(event.target.value);
                  }}
                  value={usernameOrEmail}
                />
                <br></br>
                <label htmlFor="userPassword" className="body1 text-gray900">
                  Password
                </label>
                <br></br>
                <input
                  id="userPassword"
                  type="password"
                  name="userPassword"
                  placeholder="Enter your password"
                  className="w-full mb-10 py-3 pl-3 pr-3 bg-utilWhite border rounded border-solid border-gray400 text-gray600 focus:border focus:border-orange500 invalid:border-utilRed"
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                  value={userPassword}
                />
                <button
                  type="submit"
                  className="btn btn-block bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4"
                >
                  Log In
                </button>
              </form>
              <span className="text-gray700 text-body1">
                Don’t have an account yet?
              </span>{" "}
              <Link
                to="/hotel/user-register"
                className="text-body1 font-fontWeight6 text-orange-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// --login ของ admin--
export function AdminLoginForm() {
  const [adminUsernameOrEmail, setAdminUsernameOrEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //login auth area ...
  };

  return (
    <>
      <section className="flex h-screen bg-utilBG">
        {/* img div */}
        <div className="w-2/4">
          <img src={chairBesidePool} className="object-cover h-screen w-full" />
        </div>

        {/* login container div */}
        <div className="flex justify-center items-center w-2/4 pl-12 pr-40 pt-15 pb-30">
          <div className="flex-col bg-utilBG w-screen h-fit text-left">
            <h1 className="headline2 w-full mb-60 text-green800">Log In</h1>
            <div className="w-full">
              {/* form start here */}
              <form className="adminLoginForm" onSubmit={handleSubmit}>
                <label
                  htmlFor="adminUsernameOrEmail"
                  className="body1 text-gray900"
                >
                  Username or Email
                </label>
                <br></br>
                <input
                  id="adminUsernameOrEmail"
                  name="adminUsernameOrEmail"
                  type="text"
                  placeholder="Enter your username or email"
                  className="w-full mb-10 py-3 pl-3 pr-3 bg-utilWhite border rounded border-solid border-gray400 text-gray600 focus:border focus:border-orange500 invalid:border-utilRed"
                  onChange={(event) => {
                    setAdminUsernameOrEmail(event.target.value);
                  }}
                  value={adminUsernameOrEmail}
                />
                <br></br>
                <label htmlFor="adminPassword" className="body1 text-gray900">
                  Password
                </label>
                <br></br>
                <input
                  id="adminPassword"
                  name="adminPassword"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mb-10 py-3 pl-3 pr-3 bg-utilWhite border rounded border-solid border-gray400 text-gray600 focus:border focus:border-orange500 invalid:border-utilRed"
                  onChange={(event) => {
                    setAdminPassword(event.target.value);
                  }}
                  value={adminPassword}
                />
                <button
                  type="submit"
                  className="btn btn-block bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4"
                >
                  Log In
                </button>
              </form>
              <span className="text-gray700 text-body1">
                Don’t have an account yet?
              </span>{" "}
              <Link
                to="#"
                className="text-body1 font-fontWeight6 text-orange-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
