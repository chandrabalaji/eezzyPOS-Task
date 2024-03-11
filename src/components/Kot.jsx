import { useQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { DELETE_KOTORDERS, GET_KOTORDER_LIST } from "../constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KotOrderAction } from "../Redux/Orders/Action";
import { pendingOrdersArray } from "../Redux/Orders/reducer";
import ready from "../Assets/images/Group (2).svg";
import Timer from "../Assets/images/Group (3).svg";
import leftarrow from "../Assets/images/Icon (3).svg";
import cancel from "../Assets/images/cancel.svg";
import process from "../Assets/images/Lunch time.svg";
import kot2 from "../Assets/images/Group 1873.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";

const Kot = () => {
  const [Popup, SetPopup] = useState(false);
  const [deleteId, SetdeleteId] = useState(0);
  const [deleteconfirm, Setdeleteconfirm] = useState(false);
  const [OrderNum, SetOrderNum] = useState(false);
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

  useEffect(() => {
    refetch();
  }, [refetch]);

  const [cancelorder, { data: kotcancelresult, error: kotcanselerror }] =
    useMutation(DELETE_KOTORDERS, { refetchQueries: [GET_KOTORDER_LIST] });

  const handleKotdelete = async (id, orderNum) => {
    SetPopup(true);
    SetdeleteId(id);
    SetOrderNum(orderNum);
  };

  const del = async () => {
    try {
      const result = await cancelorder({
        variables: {
          id: deleteId,
          type: "delete",
        },
      });
      Setdeleteconfirm(false);
      // console.log(result);
    } catch (error) {
      console.log("mutationkot Error", error.message);
    }
  };

  useEffect(() => {
    if (deleteconfirm) {
      SetPopup(false);
      del();
    }
  }, [deleteconfirm]);
  const popupcontent = (
    <Dialog open={Popup}>
      {/* <DialogTrigger asChild>
        <button>open</button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-text-lite-white">
            Are you Sure?
          </DialogTitle>
          <DialogDescription>
            {`Do you really want to delete ${OrderNum} Order?`}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2"></div>
        </div>
        <DialogFooter className="text-white space-x-2 text-sm justify-end">
          <DialogClose asChild>
            <button
              className=" bg-dark-black p-2 px-3 rounded"
              onClick={() => SetPopup(false)}
            >
              No, close
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button
              className=" bg-red-600 p-2 px-3 rounded"
              onClick={() => Setdeleteconfirm(true)}
            >
              Yes, delete it
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  useEffect(() => {
    Dispatch(KotOrderAction(data?.getKotOrderList.data.result));
  }, [data]);
  return (
    <div className="kot  bg-black text-white  text-sm font-medium h-screen ">
      <header className="flex justify-between items-center my-2 px-3 py-5  mx-1 h-[10px]">
        <div>
          <p className=" text-base font-medium">KOT Order Tickets</p>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <img src={process} alt="" />
            <span className="text-sm font-medium">{`${
              Kotorderlist?.length ? Kotorderlist?.length : 0
            }`}</span>
          </div>
          <div className="flex items-center  space-x-2 ">
            <img src={kot2} alt="" />
            <span className="text-sm font-medium text-dark-orange">0</span>
          </div>
          <div className="flex items-center  space-x-2">
            <img src={ready} alt="" />
            <span className=" text-lite-green text-sm font-medium">0</span>
          </div>
        </div>
        <div className="flex space-x-2 items-center ">
          <div className="flex space-x-1 items-center">
            <span className="p-1.5 rounded-full bg-green-400 h-[12px]"></span>
            <p>Dine in </p> <p> (0)</p>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="p-1.5 rounded-full bg-dark-orange h-[12px]"></span>
            <p>Take Away</p>
            <p> {`(${Kotorderlist?.length ? Kotorderlist?.length : 0})`}</p>
          </div>
          <div className="flex space-x-2 items-center pe-4">
            <span className="p-1.5 rounded-full  bg-cyan-600 h-[12px]"></span>
            <p>Online Order</p> <p> (0) </p>
          </div>
          <div className="flex bg-dark-orange p-2 rounded-[3px]  ">
            <Link to="/home" className="p-0">
              <img src={leftarrow} alt="" />
            </Link>
          </div>
        </div>
      </header>
      <div>{popupcontent}</div>
      <div className="h-[600px] custome-grid  overflow-y-scroll scroll px-3 mt-3 py-3">
        {Kotorderlist &&
          Kotorderlist.map((kot, index) =>
            kot.kotstatus !== "4" ? (
              <main
                className="bg-lite-black rounded w-[360px] h-[430px] "
                key={index}
              >
                <header className="relative bg-dark-orange p-2 flex justify-between text-xs">
                  <div>
                    <img src="" alt="" />
                    <p>Take Away</p>
                    <p>{kot.order_no}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p>{kot.c_ts}</p>
                  </div>
                  <button
                    className="absolute -top-2 -right-2    p-1.5  rounded-full bg-red-700 "
                    onClick={() => handleKotdelete(kot.id, kot.order_no)}
                  >
                    <img src={cancel} alt="" className="h-3 w-3 " />
                  </button>
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
                    <div className="flex items-center space-x-1">
                      <img src={Timer} alt="" />
                      <p>Timer Start</p>
                    </div>
                    <p>{kot.kot_ready_time}</p>
                  </div>
                </footer>
              </main>
            ) : null
          )}
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
