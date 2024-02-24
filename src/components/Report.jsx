import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Report = () => {
  const [active, setisactive] = useState("Payin/Payout");
  const btn = ["Payin/Payout", "Day Close", "Daily Report"];
  const handleContentChange = (name) => {
    setisactive(name);
  };
  return (
    <div className="report flex">
      <Sidebar
        btnactive={active}
        Sidebarbtn={btn}
        handleContentChange={handleContentChange}
      />
      <main className="bg-dark-black w-10/12">
        <div className="flex space-x-2 p-3 ">
          <div className="p-4 w-1/2 h-[620px] rounded-md bg-lite-black text-white">
            <header>
              <p className="text-sm font-medium">Payin/PayOut Details </p>
            </header>
            <div className="flex justify-between mt-3 text-sm font-medium">
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
              <p>Starting Cash</p>
              <input type="number" name="" id="" className="w-full block m-2" />
              <div className="flex justify-between items-center">
                <label htmlFor="" className="text-sm flex items-center">
                  <input type="checkbox" name="" id="" /> Apply Same amount
                  daily
                </label>
                <button className="bg-blue-500 px-3 py-2 rounded-[5px]  mt-2">
                  Apply
                </button>
              </div>
            </div>
            <hr />
            <div>
              <div >
                <button>PayIn</button>
                <button>PayOut</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Report;
