import React, { useEffect, useMemo, useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
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
import { getAPICall } from "../APIs/RESTapi";

const Dinein = () => {
  const Nav = useNavigate();
  const [Table, setTable] = useState({});
  const [Tabledetails, setTabledetails] = useState("");
  const [Popup, setPopup] = useState(false);
  const [TakeOrder, SetTakeOrder] = useState(false);

  const params = { business_id: 1, outlet_id: 1 };
  const fn = async () => {
    try {
      const res = await getAPICall("/api/v1/order/tabledetails", "GET", params);
      return res.data;
    } catch (error) {}
  };
  useEffect(() => {
    const tab = fn();
    tab.then((res) => setTabledetails(res));
  }, []);

  const popupcontent = (
    <Dialog open={Popup}>
      {/* <DialogTrigger asChild>
        <button>open</button>
      </DialogTrigger> */}
      <DialogContent className="max-w-sm ">
        <DialogHeader>
          <DialogTitle className="text-text-lite-white mb-3">
            {Table.tablename}
          </DialogTitle>
          <DialogDescription>
            <p className="text-white mb-3">
              {`Table Capacity : ${Table.tablecap}`}{" "}
            </p>
          </DialogDescription>
          <DialogDescription>
            <p className="text-white ">
              {`Taking new order from ${Table.tablename} by waiter , Are You sure to take an
              Order`}
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2"></div>
        </div>
        <DialogFooter className="text-white space-x-2 text-sm justify-center">
          <DialogClose asChild>
            <button
              className=" bg-dark-black p-2 px-3 w-40 rounded"
              onClick={() => setPopup(false)}
            >
              cancel
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button
              className="bg-blue-600 p-2 px-3 w-40 rounded"
              onClick={() => SetTakeOrder(true)}
            >
              New Order
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
  const handleTabletype = (tablename, tablecap) => {
    const table = { tablename, tablecap };
    setPopup(true);
    setTable(table);
  };

  useEffect(() => {
    if (TakeOrder) {
      Nav(`./${Table.tablename}`, { state: Table });
    }
  }, [TakeOrder]);
  return (
    <div className="dinein    box-border text-white bg-dark-black">
      <div className="scroll ps-10 pb-24 md:w-screen box-border  pt-5  h-dvh  overflow-x-hidden ">
        {Tabledetails &&
          Tabledetails.map((floor, index) => (
            <div className=" ml-3 " key={index}>
              <p className="text-lg font-medium">{floor.floor_name}</p>
              {floor.area.map((area) => (
                <div className=" p-3 mt-2 w-screen">
                  <p className="mb-4">{area.area_name}</p>
                  <div className="scroll pe-20 flex space-x-4 justify-between w-full overflow-y-scroll">
                    {area.table.map((table, index) => (
                      <Link
                        className=" rounded-xl hover:bg-sky-400  cursor-pointer  duration-300 ease-linear  font-medium text-white  px-2 flex justify-center items-center bg-lite-black  min-w-36  py-0 max-h-24 min-h-24"
                        onClick={() =>
                          handleTabletype(
                            table.table_name,
                            table.seating_capacity
                          )
                        }
                        key={index}
                      >
                        <p>{table.table_name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

        {popupcontent}
      </div>
      <Footer />
    </div>
  );
};

export default Dinein;
