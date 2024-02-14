import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import supabase from "../../../server/utils/db";

const AgentLoginPage = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to manage whether to save password
  const [savePassword, setSavePassword] = useState(false);

  const navigate = useNavigate();

  // Check if credentials are saved in localStorage and pre-fill them
  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setFormData({ email, password });
      setSavePassword(true);
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

      if (authError) throw authError;

      // Use the email from formData to fetch the user's role from the users table
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("role")
        .eq("email", formData.email) // Assuming 'email' is the unique identifier in your users table
        .single();

      if (userError) throw userError;

      // Check if the logged-in user's role is not 'admin'
      if (userData.role !== "admin") {
        // Redirect non-admin user to the agent login page
        alert("You are not an admin, redirecting to agent login page");
        navigate("/hotel/user-login");
        return; // Stop further execution since the user is not an admin
      }

      // Proceed with setting token and navigating to the agent-customer-booking page for admins
      // Assuming setToken is a function to handle setting the authentication token in your application context or state
      setToken(authData);
      navigate("/admin-customer-booking");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }

  return (
    <>
      <NavigationBar />
      <div className="flex h-screen">
        {/* Background Image Section */}
        <div className="w-1/2 bg-[url('src/assets/loginPageImage/chairBesidePool.jpg')] bg-cover bg-no-repeat bg-center"></div>

        {/* Login Form Section */}
        <div className="w-1/2 flex justify-center items-center pl-12 pr-40 bg-white  ">
          <div className="bg-white p-20 rounded  w-full max-w-md">
            <h1 className="text-[68px] font-noto-serif  text-green-800 mb-6">
              Login
            </h1>
            <br></br>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className=" text-[16px] block text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
              <br></br>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                />
              </div>

              <br></br>

              {/* Save Password Checkbox */}
              {/* <div className="flex items-center">
                <input
                  id="save-password"
                  type="checkbox"
                  checked={savePassword}
                  onChange={() => setSavePassword(!savePassword)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
                />
                <label
                  htmlFor="save-password"
                  className="ml-2 text-sm text-gray-900"
                >
                  Save my password
                </label>
              </div> */}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full p-4 bg-orange-600 text-white rounded hover:bg-orange-500"
              >
                Login
              </button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-gray-700">
                  Don’t have an account yet?{" "}
                  <a
                    href="/admin-customer-booking"
                    className="text-orange-500 font-semibold"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentLoginPage;
