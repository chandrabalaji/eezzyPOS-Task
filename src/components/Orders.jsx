import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { orderpage } from "../pages/orders/orderhistory";
import { onlineOrderPage } from "../pages/orders/onlineorder";
import { splitpage } from "../pages/orders/split";
import Pendingorders from "../pages/orders/Pendingorders";
import { kotpage } from "../pages/orders/kot";
import Sidebar from "./Sidebar";
import { useQuery } from "@apollo/client";
import { GET_PENDINGITEMS } from "../constant";
import { PendingOrderAction } from "../Redux/Orders/Action";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const Dispatch = useDispatch();
  const [content, setcontent] = useState(null);
  const [btnactive, setbtnactive] = useState("Order History");
  const [pendingOrder, SetpendingOrder] = useState([]);

  // const prder = useSelector(categorys);
  // console.log("order component", prder);
  const handleContentChange = (contentName) => {
    setbtnactive(contentName);
  };

  const { data, error, loading } = useQuery(GET_PENDINGITEMS, {
    variables: {
      business_id: "1",
      id: "",
      order_no: "",
      outlet_id: "1",
      search: "",
      terminal_id: "45",
      today: "",
    },
  });
  // SetpendingOrder(data?.getOrderList?.data);
  // console.log(" order", data && data?.getOrderList?.data);
  useEffect(() => {
    if (data && data?.getOrderList?.data) {
      Dispatch(PendingOrderAction(data?.getOrderList?.data));
    }
  }, [data]);

  // SetpendingOrder(data && data?.getOrderList?.data);
  useEffect(() => {
    switch (btnactive) {
      case "Order History":
        setcontent(orderpage);
        break;
      case "Split History":
        setcontent(splitpage);
        break;
      case "Pending Orders":
        setcontent(<Pendingorders />);
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
