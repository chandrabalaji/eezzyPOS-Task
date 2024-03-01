import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_KOTORDER_LIST } from "../constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KotOrderAction } from "../Redux/Orders/Action";
import { pendingOrdersArray } from "../Redux/Orders/reducer";
const Kot = () => {
  const Dispatch = useDispatch();
  const orderReducer = useSelector(pendingOrdersArray);
  const Kotorderlist = orderReducer.KotOrders;

  const { data, error, loading, refetch } = useQuery(GET_KOTORDER_LIST, {
    variables: {
      business_id: "1",
      id: "",
      is_machine: "",
      order_no: "",
      outlet_id: "1",
      search: "",
      terminal_id: "45",
      today: "yes",
    },
  });

  refetch();
  useEffect(() => {
    Dispatch(KotOrderAction(data?.getKotOrderList.data.result));
  }, [data]);

  return (
    <div className="kot  bg-black text-white  text-sm font-medium h-screen ">
      <header className="flex justify-between items-center my-2 px-3 py-5  mx-1 h-[10px]">
        <div>
          <p className=" text-base font-medium">KOT Order Tickets</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <img src="" alt="" /> <span>0</span>
          </div>
          <div>
            <img src="" alt="" /> <span>0</span>
          </div>
          <div>
            <img src="" alt="" /> <span>0</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex">
            <span></span> <p>Dine in </p> <p> (0)</p>
          </div>
          <div className="flex">
            <span></span> <p>Take Away</p> <p> {`(${Kotorderlist?.length})`}</p>
          </div>
          <div className="flex">
            <span></span> <p>Online Order</p> <p> (0) </p>
          </div>
          <div>
            <img src="" alt="" />
            <Link to="/home">back</Link>
          </div>
        </div>
      </header>
      <div className="h-[600px] custome-grid  overflow-y-scroll scroll px-3 mt-3 py-3">
        {Kotorderlist &&
          Kotorderlist.map((kot) => (
            <main className="bg-lite-black  w-[360px] h-[440px]  ">
              <header className=" bg-dark-orange p-2 flex justify-between text-xs">
                <div>
                  <img src="" alt="" />
                  <p>Take Away</p>
                  <p>{kot.order_no}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p>{kot.c_ts}</p>
                </div>
              </header>
              <section>
                <div className="flex justify-between items-center px-3 py-2 pe-6 font-semibold ">
                  <p>items</p> <p>Qty</p>
                </div>
                <div className="h-[280px] overflow overflow-y-scroll scroll   text-text-lite-white">
                  {kot.product_item?.map((item) => (
                    <div className="flex justify-between items-center ps-3 py-2 pe-8  font-light">
                      <p>{item.prod_name}</p>
                      <p>{item.quantity}</p>
                    </div>
                  ))}
                </div>
              </section>
              <footer className="mt-1 space-y-2 bg-gray-600 p-2">
                <div className="flex justify-between items-center">
                  <div className="bg-white text-black px-12 py-1 rounded-[5px]">
                    <img src="" alt="" /> <p>print</p>
                  </div>
                  <div className="bg-white text-black px-20 py-1 rounded-[5px]">
                    <img src="" alt="" /> <p>Queue</p>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white py-1 px-2 text-black rounded-[5px]">
                  <div>
                    <img src="" alt="" />
                    <p>Timer Start</p>
                  </div>
                  <p>{kot.kot_ready_time}</p>
                </div>
              </footer>
            </main>
          ))}
      </div>
      <footer className="bg-lite-black px-0 m-0  py-3 flex justify-center">
        <div className="flex justify-center items-center space-x-2 ">
          <p className="text-base font-light  border-b-4 border-b-green-600">
            Activve
          </p>
          <p className="text-base font-light">Completed</p>
        </div>
      </footer>
    </div>
  );
};

export default Kot;
