import React, { useState } from "react";
import Sidebar from "./Sidebar";
import search from "../Assets/images/Icon (2).svg";
import Footer from "./Footer";
import del from "../Assets/images/delete.png";
import tick from "../Assets/images/Group 1579.svg";
import userimg from "../Assets/images/userimg.png";
import pencile from "../Assets/images/Pencil.svg";
import cus from "../Assets/images/customer.svg";
import { HiUserAdd } from "react-icons/hi";
import { HiFire } from "react-icons/hi";
import "flowbite";

const Customer = () => {
  const [Customer, setCustomer] = useState("All Customer");

  const handleCustomerinfo = (name) => {
    setCustomer(name);
  };
  const btn = [
    "All Customer",
    "New Customer",
    "Old Customer",
    "Favourite Customer",
  ];

  return (
    <div className="customer  flex">
      <Sidebar
        Sidebarbtn={btn}
        handleContentChange={handleCustomerinfo}
        btnactive={Customer}
      />
      <main className=" bg-dark-black w-10/12  h-screen text-white">
        <header className="  pt-6 ps-5">
          <div className="mb-6">
            <p>Customer</p>
          </div>
          <div className="flex justify-between items-center box-border pe-5 text-white">
            <div className="space-x-4 flex items-center">
              <input
                type="text"
                className=" ps-4  p-2  bg-transparent rounded  w-40 "
                placeholder="Split Type Amount/item"
              />
              <input
                type="text"
                className=" ps-4 p-2 bg-transparent rounded w-40"
                placeholder="Invoice/Order no"
              />
              <button className="bg-blue-600 p-2 rounded ">
                <img src={search} alt="" width={14} height={14} />
              </button>
              <button className="bg-lite-black p-2 rounded  text-xs px-3">
                Clear
              </button>
            </div>

            {/* <!-- drawer init and toggle --> */}
            <div class="text-center">
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="button"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
              >
                Show right drawer
              </button>
            </div>

            {/* <!-- drawer component --> */}
            <div
              id="drawer-right-example"
              class="offcanvas fixed top-0 right-0 z-40 h-screen p-2 overflow-y-auto transition-transform translate-x-full  duration-700 bg-lite-black"
              tabindex="-1"
              aria-labelledby="drawer-right-label"
            >
              <h5
                id="drawer-right-label"
                class="inline-flex items-center mb-4 text-base font-semibold text-white"
              >
                Add Customer
              </h5>
              <button
                type="button"
                data-drawer-hide="drawer-right-example"
                aria-controls="drawer-right-example"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close menu</span>
              </button>

              <div className=" ">
                <div className="flex  justify-between items-center  space-x-2 px-4">
                  <div>
                    <img src={cus} alt="" width={100} height={150} />
                  </div>
                  <div className="grid ">
                    <label htmlFor="" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      className=" w-64 bg-dark-black rounded-md"
                    />
                    <label htmlFor="" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input type="text" className="bg-dark-black rounded-md" />
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-3 gap-x-6 gap-y-3">
                  <div className="grid">
                    <label htmlFor="" className="text-sm font-medium">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="w-48 bg-dark-black rounded-md "
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm font-medium">
                      Post Code <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="w-48 bg-dark-black rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm font-medium">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      className="w-48 bg-dark-black rounded-md"
                    />
                  </div>
                  <div className="grid">
                    <label htmlFor="" className="text-sm font-medium">
                      Area
                    </label>
                    <input
                      type="text"
                      className="w-48 bg-dark-black rounded-md"
                    />
                  </div>
                  <div className="grid">
                    <label htmlFor="" className="text-sm font-medium">
                      DOB
                    </label>
                    <input
                      type="date"
                      name=""
                      id=""
                      className="w-48 bg-dark-black rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm font-medium">
                      Anniversary
                    </label>
                    <input
                      type="date"
                      name=""
                      id=""
                      className="w-48 bg-dark-black rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm font-medium">
                      Address
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="5"
                      className="bg-dark-black rounded-md"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="" className="text-sm font-medium">
                      Tax Number
                    </label>
                    <input
                      type="text"
                      className="w-48 bg-dark-black rounded-md "
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pe-5">
                <button className="bg-blue-500 cursor-pointer px-5 py-2 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="mt-4 ">
          {Customer === "All Customer" ? (
            <div className=" flex justify-between items-center px-10 ps-6 pe-20 text-xs font-medium mb-2 border-b-1">
              <div className="flex space-x-4">
                <img src={userimg} alt="" className="rounded-md" />
                <div>
                  <p>Balaji</p>
                  <p>9876543210</p>
                </div>
              </div>
              <div>
                <p>Balaji01@gmail.com</p>
              </div>
              <div>
                <p>60001</p>
              </div>
              <div className="flex items-center space-x-5 ps-6 ">
                <button className="bg-lite-black p-3 rounded ">
                  <img src={tick} alt="" width={12} height={12} />
                </button>
                <button className="bg-lite-black p-3 rounded ">
                  <img src={pencile} alt="" width={12} height={12} />
                </button>
                <button className="bg-lite-black p-3 rounded">
                  <img src={del} alt="" width={12} height={12} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center space-y-4 mt-32">
              <img src={cus} alt="" width={100} height={100} />
              <p>NO Customer Details</p>
              <p className="text-sm">
                Customers are not available. Click Add Customer to Create new
                Customer
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Customer;
