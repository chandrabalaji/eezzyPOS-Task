import React from "react";
import { RiTakeawayLine } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { MdKitchen } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import devid from "../Assets/images/Rectangleee.png";
import takeway from "../Assets/images/paper-bag (1) 1.svg";
import dine from "../Assets/images/dining-table.png";
import order from "../Assets/images/checkout.png";
import customer from "../Assets/images/User.png";

const Footer = () => {
  return (
    <div className="foot">
      <div className="foo-act">
        <img src={takeway} alt="" />
        <p>Take Away</p>
      </div>
      <img src={devid} alt="" />
      <div>
        <img src={dine} alt="" />
        <p>Dine in</p>
      </div>
      <img src={devid} alt="" />

      <div>
        <img src={order} alt="" />
        <p>Order</p>
      </div>
      <img src={devid} alt="" />

      <div>
        <img src={customer} alt="" />
        <p>Customer</p>
      </div>
      <img src={devid} alt="" />

      <div>
        <TbReportSearch />
        <p>Report</p>
      </div>
    </div>
  );
};

export default Footer;
