import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Report = () => {
  const [active, setisactive] = useState("Payin/Payout");
  const btn = ["Payin/Payout", "Day Close", "Daily Report"];
  const topath = ["/report", "dayclose", "dailyreport"];

  const handleContentChange = (name) => {
    setisactive(name);
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
