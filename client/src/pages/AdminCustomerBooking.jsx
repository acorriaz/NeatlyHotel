import { useCallback } from "react";
import React, { useState } from "react";
import SideBarAdmin from "../components/SideBarAdmin";
import { Link, useNavigate } from "react-router-dom";

const AdminCustomerBooking = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/agent-login");
  }

  return (
    <div className="w-full relative bg-utility-white overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
      <SideBarAdmin />
      <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_240px)] mq1050:max-w-full">
        <section className="self-stretch h-[944px] bg-gray-100 overflow-hidden shrink-0 flex flex-row items-start justify-center p-12 box-border max-w-full lg:pl-6 lg:pr-6 lg:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[31px] mq1050:pb-[31px] mq1050:box-border">
          <div className="flex-1 rounded overflow-x-auto flex flex-col items-start justify-start py-0 px-3 box-border max-w-full"></div>
        </section>
      </main>
    </div>
  );
};

export default AdminCustomerBooking;
