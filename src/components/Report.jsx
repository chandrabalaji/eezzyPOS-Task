import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import arrow from "../Assets/images/arrow.svg";
import arrow2 from "../Assets/images/arrow2.svg";
import { Routes, Route, useNavigate, Outlet, Link } from "react-router-dom";

const Report = () => {
  const nav = useNavigate();
  const [active, setisactive] = useState("payinout");
  const [paytype, setpaytype] = useState("payin");
  const btn = ["Payin/Payout", "DayClose", "Daily Report"];
  const topath = ["/report", "dayclose", "dailyreport"];

  const handleContentChange = (name) => {
    setisactive(name);
  };
  const handletypebtn = (val) => {
    setpaytype(val);
  };

  return (
    <div className="report flex">
      <Sidebar
        btnactive={active}
        Sidebarbtn={btn}
        handleContentChange={handleContentChange}
        topath={topath}
      />
      <div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
};

export default Report;
