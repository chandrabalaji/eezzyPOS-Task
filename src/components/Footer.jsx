import React, { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import devid from "../Assets/images/Rectangleee.png";
import takeway from "../Assets/images/Mask group (1).svg";
import dine from "../Assets/images/dining-table.png";
import order from "../Assets/images/checkout.png";
import customer from "../Assets/images/User.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [active, setIsactive] = useState("home");

  return (
    <div className="foot w-4/6 p-4 overflow-scroll">
      <Link className={active === "home" ? "foo-act" : null} to="/home">
        <img src={takeway} alt="" />
        <p className="text-sm" onClick={() => setIsactive("home")}>
          Take Away
        </p>
      </Link>
      <img src={devid} alt="" />
      <Link to="/Dinein" className={active === "Dinein" ? "foo-act" : null}>
        <img src={dine} alt="" />
        <p className="text-sm" onClick={() => setIsactive("Dinein")}>
          Dine in
        </p>
      </Link>
      <img src={devid} alt="" />

      <Link to="/orders" className={active === "orders" ? "foo-act" : null}>
        <img src={order} alt="" />
        <p className="text-sm" onClick={() => setIsactive("orders")}>
          Order
        </p>
      </Link>
      <img src={devid} alt="" />

      <Link
        to="/customers"
        className={active === "customers" ? "foo-act" : null}
      >
        <img src={customer} alt="" />
        <p className="text-sm" onClick={() => setIsactive("customers")}>
          Customer
        </p>
      </Link>
      <img src={devid} alt="" />

      <Link
        to="/report"
        className={active === "report" ? "foo-act" : null}
      >
        <TbReportSearch />
        <p className="text-sm" onClick={() => setIsactive("report")}>
          Report
        </p>
      </Link>
    </div>
  );
};

export default Footer;
