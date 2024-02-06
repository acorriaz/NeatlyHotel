import { Link } from "react-router-dom";
import React, { useState } from "react";
import chairBesidePool from "../assets/loginPageImage/chairBesidePool.jpg";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import supabase from "../../../server/utils/db";

const AgentRegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <NavigationBar />
      <div className="w-full relative bg-green-700 overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
        <main className="self-stretch font-noto-serif overflow-hidden flex flex-row items-center justify-center p-[60px] box-border bg-[url('src/assets/loginPageImage/chairBesidePool.jpg')]  bg-cover bg-no-repeat bg-[top] max-w-full lg:py-[39px] lg:px-[30px] lg:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[25px] mq1050:pb-[25px] mq1050:box-border">
          <form
            onSubmit={handleSubmit}
            className="m-0 w-[1092px] rounded bg-white shadow-[4px_4px_16px_rgba(0,_0,_0,_0.08)] flex flex-col items-center justify-start p-20 box-border gap-[60px] max-w-full lg:gap-[60px] lg:py-[52px] lg:px-10 lg:box-border mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq750:gap-[60px] mq1050:pt-[34px] mq1050:pb-[34px] mq1050:box-border"
          >
            <h1 className="m-0 self-stretch relative text-5xl tracking-[-0.02em] leading-[125%] font-medium font-headline2 text-green-800 text-left mq450:text-[41px] mq450:leading-[51px] mq1050:text-[54px] mq1050:leading-[68px]">
              Agent Register
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-base text-gray-900 font-body1 mq750:gap-[40px]">
              <div className="relative text-xl tracking-[-0.02em] leading-[150%] font-semibold text-lightslategray text-right mq450:text-base mq450:leading-[24px]">
                Basic Information
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[40px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                      Full Name
                    </div>
                  </div>
                  <div className="self-stretch rounded bg-utility-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[17px] pl-[11px] max-w-full border-[1px] border-solid border-gray-400">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-start justify-start font-body1 text-base text-lightslategray min-w-[250px] max-w-full"
                      placeholder="Enter your name and last name"
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[40px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                          Email
                        </div>
                      </div>
                      <div className="self-stretch rounded bg-utility-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[17px] pl-[11px] max-w-full border-[1px] border-solid border-gray-400">
                        <input
                          className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-start justify-start font-body1 text-base text-lightslategray min-w-[250px] max-w-full"
                          placeholder="Enter your Email"
                          name="email"
                          type="email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[40px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                          Password
                        </div>
                      </div>
                      <div className="self-stretch rounded bg-utility-white box-border overflow-hidden flex flex-row items-start justify-start py-3 pr-[17px] pl-[11px] max-w-full border-[1px] border-solid border-gray-400">
                        <input
                          className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-start justify-start font-body1 text-base text-lightslategray min-w-[250px] max-w-full"
                          placeholder="Enter your password"
                          name="password"
                          type="password"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[446px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <button className="cursor-pointer [border:none] py-4 px-8 bg-orange-600 self-stretch rounded flex flex-row items-center justify-center hover:bg-chocolate">
                  <div className="relative text-base leading-[16px] font-semibold font-open-sans text-utility-white text-center">
                    Register
                  </div>
                </button>
                <div className="flex flex-row items-start justify-center [row-gap:20px] mq450:flex-wrap">
                  <div className="relative text-base tracking-[-0.02em] leading-[150%] font-body1 text-gray-700 text-left">
                    Already have an account?
                  </div>
                  <Link
                    to="/agent-login"
                    className="cursor-pointer [border:none] py-1 px-2 bg-[transparent] flex flex-row items-start justify-start gap-[8px]"
                  >
                    <div className="relative text-base leading-[16px] font-semibold font-open-sans text-orange-500 text-center">
                      Login
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AgentRegisterPage;
