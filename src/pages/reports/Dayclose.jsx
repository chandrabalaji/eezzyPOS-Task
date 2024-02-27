import React from "react";

import printer from "../../Assets/images/Printer.svg";

const Dayclose = () => {
  return (
    <main className="bg-dark-black w-10/12">
      <div className="custome-border scroll bg-lite-black m-5 text-white p-3 h-[600px] overflow-scroll ">
        <div className=" flex justify-between px-4 mb-3">
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
    </main>
  );
};

export default Dayclose;
