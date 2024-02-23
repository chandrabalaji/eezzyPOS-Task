import React from "react";
import Footer from "./Footer";

const Dinein = () => {
  return (
    <div className="dinein    box-border text-white bg-dark-black">
      <div className=" ps-10 md:w-screen box-border  pt-5 w-1/2">
        <div className=" ml-3 w-1/3">
          <p className="text-lg font-medium">Floor-1</p>
          <div className="p-3 mt-2">
            <p className="mb-4">Delux</p>
            <div className="flex space-x-4 justify-between">
              <div className=" rounded-lg hover:bg-sky-400  cursor-pointer  duration-300 ease-linear  font-medium text-white  bg-lite-black   px-14  py-9">
                Table
              </div>
              <div className="rounded-lg hover:bg-sky-400 cursor-pointer  duration-300 ease-linear font-medium text-white  bg-lite-black   px-14 py-9">
                Table
              </div>
              <div className="rounded-lg hover:bg-sky-400 cursor-pointer  duration-300 ease-linear font-medium text-white  bg-lite-black   px-14 py-9">
                Table
              </div>
            </div>
          </div>
        </div>
        <div className="ml-3 w-1/3">
          <p className="text-lg  font-medium">Floor-II</p>
          <div className="p-3 mt-2">
            <p className="mb-4">Suit</p>
            <div className="flex space-x-4 justify-between">
              <div className="rounded-lg  hover:bg-sky-400 cursor-pointer  duration-300 ease-linearfont-medium text-white  bg-lite-black   px-14 py-9">
                Table
              </div>
              <div className="rounded-lg hover:bg-sky-400 cursor-pointer  duration-300 ease-linear font-medium text-white  bg-lite-black   px-14 py-9">
                Table
              </div>
              <div className="rounded-lg hover:bg-sky-400 cursor-pointer  duration-300 ease-linear font-medium text-white  bg-lite-black   px-14 py-9">
                Table
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dinein;
