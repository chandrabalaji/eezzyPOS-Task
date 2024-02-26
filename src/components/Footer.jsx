import React from "react";
// import { RiTakeawayLine } from "react-icons/ri";
// import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
// import { MdKitchen } from "react-icons/md";
// import { LuUser2 } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import devid from "../Assets/images/Rectangleee.png";
import takeway from "../Assets/images/Mask group (1).svg";
import dine from "../Assets/images/dining-table.png";
import order from "../Assets/images/checkout.png";
import customer from "../Assets/images/User.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot w-4/6 p-4 overflow-scroll">
      <Link className="foo-act " to="/home">
        <img src={takeway} alt="" />
        <p className="text-sm">Take Away</p>
      </Link>
      <img src={devid} alt="" />
      <Link to="/Dinein">
        <img src={dine} alt="" />
        <p className="text-sm">Dine in</p>
      </Link>
      <img src={devid} alt="" />

      <Link to="/orders">
        <img src={order} alt="" />
        <p className="text-sm">Order</p>
      </Link>
      <img src={devid} alt="" />

      <Link to="/customers">
        <img src={customer} alt="" />
        <p className="text-sm">Customer</p>
      </Link>
      <img src={devid} alt="" />

      <Link to="/report">
        <TbReportSearch />
        <p className="text-sm">Report</p>
      </Link>
    </div>
  );
};

export default Footer;
