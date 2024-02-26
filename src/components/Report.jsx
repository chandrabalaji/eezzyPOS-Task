import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import arrow from "../Assets/images/arrow.svg";
import arrow2 from "../Assets/images/arrow2.svg";
import printer from "../Assets/images/Printer.svg";

const Report = () => {
  const [active, setisactive] = useState("Payin/Payout");
  const [content, setcontent] = useState(null);
  const btn = ["Payin/Payout", "Day Close", "Daily Report"];
  const handleContentChange = (name) => {
    setisactive(name);
  };
  useEffect(() => {
    if (active === "Payin/Payout") {
      setcontent(payinout);
    } else if (active === "Day Close") {
      setcontent(dayclose);
    } else {
      setcontent(dailyreport);
    }
  }, [active]);

  const dailyreport = (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[600px] p-4 text-white">
        <div className="relative bg-lite-black  row-span-2">
          <header className="flex justify-between text-sm font-medium p-3">
            <p>Sales by Category</p>
            <div className="flex space-x-1 text-lite-green">
              <p>
                <span>0</span> Count
              </p>
              <p>
                <span>0</span> Total Sales
              </p>
            </div>
          </header>
          <div className=" absolute top-1/2 left-48">
            <p>No Sales by Category Details</p>
          </div>
        </div>
        <div className="scroll bg-lite-black overflow-scroll">
          <header className="flex justify-between text-sm font-medium p-3">
            <p>Sales Summary</p>
            <div className="flex space-x-1 text-lite-green">
              <p>
                <span>0</span> Count
              </p>
              <p>
                <span>0</span> Total Sales
              </p>
            </div>
          </header>
          <div className="">
            <table className="w-[570px] box-border  space-y-2  mx-4">
              <thead>
                <tr>
                  <td>Sales Type</td>
                  <td>Count</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody className="">
                <tr className="pb-2">
                  <td className="">Sales</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Cancellation</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Loyalty/Coupons</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Miscellaneous</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="scroll bg-lite-black  overflow-scroll">
          <header className="flex justify-between text-sm font-medium p-3">
            <p>Transaction</p>
            <div className="flex space-x-1 text-lite-green">
              <p>
                <span>0</span> Count
              </p>
              <p>
                <span>0</span> Total Sales
              </p>
            </div>
          </header>
          <table className="w-[570px] box-border  space-y-2  mx-4">
            <thead>
              <tr>
                <td>Transaction</td>
                <td>Count</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Starting Cash</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Cash Sales</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Card Sales</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Payins</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Payouts</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>UPI</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="flex items-center space-x-1 bg-blue-500 px-3 py-2 ms-4 rounded-[5px] text-white">
        <img src={printer} alt="" />
        <span>Print</span>
      </button>
    </>
  );

  const dayclose = (
    <div className="scroll bg-lite-black m-5 text-white p-3 h-[600px] overflow-scroll ">
      <div className="flex justify-between px-4 mb-3">
        <p>Day </p>
        <img src={printer} alt="" width={20} height={20} />
      </div>
      <hr />
      <div className="day-closing grid gap-y-5  p-3 text-base font-medium">
        <div>
          <p>Starting Cash</p>
          <p>0</p>
        </div>
        <div>
          <p>Payins</p>
          <p>0</p>
        </div>
        <div>
          <p>Cash Payments</p>
          <p>0</p>
        </div>
        <div>
          <p>Card Payments</p>
          <p>0</p>
        </div>
        <div>
          <p>UPI Payment</p>
          <p>0</p>
        </div>
        <hr />
        <div className=" justify-self-end">
          <p>0.00</p>
        </div>
        <div className="my-1">
          <p>PayOut</p>
          <p>0</p>
        </div>
        <hr />
        <div className="my-2">
          <p>Total</p>
          <p>0.00</p>
        </div>
        <hr />
        <div className="mb-2">
          <p>cash Available</p>
          <p className="bg-dark-blace ps-4 py-2">0</p>
        </div>
        <div>
          <p>Overage/Shortage</p>
          <p>0.00</p>
        </div>
        <button className="text-base font-medium px-3 py-2 justify-self-end bg-blue-600">
          Day Close
        </button>
      </div>
    </div>
  );

  const payinout = (
    <div className="flex space-x-3 p-4 ">
      <div className="p-4 w-1/2 h-[620px] rounded-md bg-lite-black text-white">
        <header>
          <p className="text-sm font-medium">Payin/PayOut Details </p>
        </header>
        <div className="flex justify-between mt-5 text-sm font-medium">
          <p>Transaction Name</p>
          <div className="flex space-x-16">
            <p>Amount</p>
            <p>Actions</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-lite-black text-white w-1/2 p-4 ">
        <div className="grid   pb-4 ">
          <p className="text-sm font-medium">Starting Cash</p>
          <input
            type="number"
            name=""
            id=""
            className="text-md font-medium px-3 py-2 rounded-[4px]  bg-dark-black mt-2"
          />
          <div className="flex justify-between items-center">
            <label htmlFor="" className="text-sm flex items-center">
              <input type="checkbox" name="" id="" /> Apply Same amount daily
            </label>
            <button className="bg-blue-500 px-3 py-2 rounded-[5px]  mt-2">
              Apply
            </button>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex mt-4 space-x-2">
            <button className="flex items-center justify-between bg-gray-500 w-1/2  rounded-[5px] px-5 py-2  text-sm font-medium">
              PayIn
              <img src={arrow2} alt="" width={17} height={17} />
            </button>
            <button className="flex items-center justify-between bg-gray-500 w-1/2  rounded-[5px] px-5 py-2 text-sm font-medium">
              PayOut
              <img src={arrow} alt="" width={17} height={17} />
            </button>
          </div>
          <div className="text-sm font-medium grid mt-4 gap-y-2">
            <p>Transaction Type</p>
            <span>Payin</span>
            <div className="grid gap-y-1">
              <label htmlFor="">Transaction Name</label>
              <input
                type="text"
                className="text-md font-medium px-3 py-2 rounded-[4px] bg-dark-black"
              />
            </div>
            <div className="grid gap-y-1">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                name=""
                id=""
                className="text-md font-medium px-3 py-2 rounded-[4px]  bg-dark-black"
              />
            </div>
            <button className=" justify-self-end rounded-[5px] bg-blue-500 text-sm font-medium px-4 py-2 mt-2">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="report flex">
      <Sidebar
        btnactive={active}
        Sidebarbtn={btn}
        handleContentChange={handleContentChange}
      />
      <main className="bg-dark-black w-10/12">{content && content}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Report;
