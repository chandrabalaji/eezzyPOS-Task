import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { orderpage } from "../pages/orders/orderhistory";
import { onlineOrderPage } from "../pages/orders/onlineorder";
import { splitpage } from "../pages/orders/split";
import { pendingpage } from "../pages/orders/pending";
import { kotpage } from "../pages/orders/kot";
import Sidebar from "./Sidebar";

const Orders = () => {
  const [content, setcontent] = useState(null);
  const [btnactive, setbtnactive] = useState("Order History");

  const handleContentChange = (contentName) => {
    setbtnactive(contentName);
  };

  useEffect(() => {
    switch (btnactive) {
      case "Order History":
        setcontent(orderpage);
        break;
      case "Split History":
        setcontent(splitpage);
        break;
      case "Pending Orders":
        setcontent(pendingpage);
        break;
      case "KOT Orders":
        setcontent(kotpage);
        break;
      case "Online Orders":
        setcontent(onlineOrderPage);
        break;
    }
  }, [btnactive]);

  const button = [
    "Order History",
    "Split History",
    "Pending Orders",
    "KOT Orders",
    "Online Orders",
  ];
  return (
    <div className="orders flex">
      <Sidebar
        Sidebarbtn={button}
        btnactive={btnactive}
        handleContentChange={handleContentChange}
      />
      {content && content}
      <Footer />
    </div>
  );
};

export default Orders;
