import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
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
      navigate("/agent-customer-booking");
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }

  return (
    <>
      <NavigationBar />
      <div className="w-full relative bg-center overflow-hidden flex flex-row-reverse items-start justify-start tracking-[normal] bg-[url('src/assets/loginPageImage/chairBesidePool.jpg')]">
        <main className="self-stretch font-noto-serif overflow-hidden flex flex-row items-center justify-center p-[60px] box-border bg-[url('src/assets/loginPageImage/chairBesidePool.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full lg:py-[39px] lg:px-[30px] lg:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[25px] mq1050:pb-[25px] mq1050:box-border">
          <form
            onSubmit={handleSubmit}
            className="m-0 w-[1092px] rounded bg-white shadow-[4px_4px_16px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start p-20 box-border gap-[60px] max-w-full lg:gap-[60px] lg:py-[52px] lg:px-10 lg:box-border mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq750:gap-[60px] mq1050:pt-[34px] mq1050:pb-[34px] mq1050:box-border"
          >
            <h1 className="m-0 self-stretch relative text-5xl  tracking-[-0.02em] leading-[125%] font-medium font-headline2 text-green-800 text-left mq450:text-[41px] mq450:leading-[51px] mq1050:text-[54px] mq1050:leading-[68px]">
              Login
            </h1>

            {/* Email Input */}
            <div className="self-stretch rounded bg-utility-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[17px] pl-[11px] max-w-full border-[1px] border-solid border-gray-400">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-start justify-start font-body1 text-base text-lightslategray min-w-[250px] max-w-full"
                placeholder="Enter your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div className="self-stretch rounded bg-utility-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[17px] pl-[11px] max-w-full border-[1px] border-solid border-gray-400">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-start justify-start font-body1 text-base text-lightslategray min-w-[250px] max-w-full"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Save Password Checkbox */}
            <div className="flex items-center">
              <input
                id="save-password"
                type="checkbox"
                checked={savePassword}
                onChange={() => setSavePassword(!savePassword)}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
              />
              <label
                htmlFor="save-password"
                className="ml-2 block text-sm text-gray-900"
              >
                Save my password
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="cursor-pointer [border:none] py-4 px-8 bg-orange-600 self-stretch rounded flex flex-row items-center justify-center hover:bg-chocolate"
            >
              <div className="relative text-base leading-[16px] font-semibold font-open-sans text-utility-white text-center">
                Login
              </div>
            </button>

            {/* Register Link */}
            <div className="flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
              <div className="relative text-base tracking-[-0.02em] leading-[150%] font-body1 text-gray-700 text-left">
                Already have an account?
              </div>
              <button className="cursor-pointer [border:none] py-1 px-2 bg-[transparent] flex flex-row items-start justify-start gap-[8px]">
                <div className="relative text-base leading-[16px] font-semibold font-open-sans text-orange-500 text-center">
                  <Link to="/admin-customer-booking">Register</Link>
                </div>
              </button>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AgentLoginPage;
