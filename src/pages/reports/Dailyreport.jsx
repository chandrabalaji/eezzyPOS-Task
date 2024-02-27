import React from "react";
import printer from "../../Assets/images/Printer.svg";

const Dailyreport = () => {
  return (
    <main className="bg-dark-black w-10/12">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[600px] p-4 text-white">
        <div className="custome-border relative bg-lite-black  row-span-2">
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
        <div className="custome-border scroll bg-lite-black overflow-scroll">
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
        <div className=" custome-border scroll bg-lite-black  overflow-scroll">
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
    </main>
  );
};

export default Dailyreport;
