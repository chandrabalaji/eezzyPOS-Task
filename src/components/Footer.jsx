import React from "react";
import { RiTakeawayLine } from "react-icons/ri";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { MdKitchen } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import devide from "../Assets/images/Rectangleee.png";
const Footer = () => {
  return (
    <div className="foot">
      <div className="foo-act">
        <p>Take Away</p>
      </div>
      <img src={devide} alt="" />
      <div>
        <MdOutlineAirlineSeatReclineNormal />
        <p>Dine in</p>
      </div>
      <img src={devide} alt="" />

      <div>
        <MdKitchen />
        <p>Order</p>
      </div>
      <img src={devide} alt="" />

      <div>
        <LuUser2 />
        <p>Customer</p>
      </div>
      <img src={devide} alt="" />

      <div>
        <TbReportSearch />
        <p>Report</p>
      </div>
    </div>
  );
};

export default Footer;
