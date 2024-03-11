import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import search from "../Assets/images/Icon (2).svg";
import Footer from "./Footer";
import del from "../Assets/images/delete.png";
import tick from "../Assets/images/Group 1579.svg";
import userimg from "../Assets/images/userimg.png";
import pencile from "../Assets/images/Pencil.svg";
import user from "../Assets/images/user887.svg";
import cus from "../Assets/images/customer.svg";
import { HiUserAdd } from "react-icons/hi";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Get_query } from "../query";
import { GET_ALLCUSTOMER } from "../constant";

const Customer = () => {
  const [Customer, setCustomer] = useState("All Customer");

  const [BillingCustomer, SetBillingCustomer] = useState([]);

  const variables = {
    area: "",
    business_id: "1",
    id: "",
    is_favorite: "0",
    outlet_id: "1",
    search: "",
    today: "",
  };

  const queryCall = async () => {
    const { data } = await Get_query(GET_ALLCUSTOMER, variables);
    console.log(data);
    SetBillingCustomer(data?.getBillingCustomers);
  };
  useEffect(() => {
    queryCall();
  }, []);

  const handleCustomerinfo = (name) => {
    setCustomer(name);
  };
  const btn = [
    "All Customer",
    "New Customer",
    "Old Customer",
    "Favourite Customer",
  ];
  // console.log(Customer);
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
            <Sheet>
              <SheetTrigger className="bg-blue-500 flex items-center  p-3 font-medium space-x-1">
                <HiUserAdd /> <span>Add Customer</span>
              </SheetTrigger>
              <SheetContent className=" min-w-[460px] px-5 bg-lite-black">
                <SheetHeader>
                  <SheetTitle>Add Customer</SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <div className="customerinfo mt-3">
                    <div className="flex  justify-between items-center  space-x-2 ps-4 pe-6">
                      <div>
                        <img
                          src={user}
                          alt=""
                          width={100}
                          height={100}
                          className="bg-dark-black px-3 py-4 pb-1"
                        />
                      </div>
                      <div className="grid ">
                        <label htmlFor="" className="text-sm font-medium">
                          First Name
                        </label>
                        <input
                          type="text"
                          className=" w-64 bg-dark-black  mb-3"
                        />
                        <label htmlFor="" className="text-sm font-medium">
                          Last Name
                        </label>
                        <input type="text" className="bg-dark-black " />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mt-3 gap-x-6 gap-y-3">
                      <div className="grid">
                        <label htmlFor="" className="text-sm font-medium">
                          Phone Number <span>*</span>
                        </label>
                        <input type="text" className="w-48 bg-dark-black  " />
                      </div>
                      <div>
                        <label htmlFor="" className="text-sm font-medium">
                          Post Code <span>*</span>
                        </label>
                        <input type="text" className="w-48 bg-dark-black " />
                      </div>
                      <div>
                        <label htmlFor="" className="text-sm font-medium">
                          Email <span>*</span>
                        </label>
                        <input
                          type="email"
                          name=""
                          id=""
                          className="w-48 bg-dark-black "
                        />
                      </div>
                      <div className="grid">
                        <label htmlFor="" className="text-sm font-medium">
                          Area
                        </label>
                        <input type="text" className="w-48 bg-dark-black " />
                      </div>
                      <div className="grid">
                        <label htmlFor="" className="text-sm font-medium">
                          DOB
                        </label>
                        <input
                          type="date"
                          name=""
                          id=""
                          className="w-48 bg-dark-black "
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
                          className="w-48 bg-dark-black "
                        />
                      </div>
                      <div className="grid">
                        <label htmlFor="" className="text-sm font-medium">
                          Address
                        </label>
                        <textarea
                          name=""
                          id=""
                          cols="20"
                          rows="5"
                          className="bg-dark-black "
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="" className="text-sm font-medium">
                          Tax Number
                        </label>
                        <input type="text" className="w-48 bg-dark-black  " />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pe-5">
                    <button className="bg-blue-500 cursor-pointer px-5 py-2 rounded">
                      Save
                    </button>
                  </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <section className="mt-4 ">
          {Customer === "All Customer" ? (
            <>
              {BillingCustomer &&
                BillingCustomer.map((cus) => (
                  <div className=" flex justify-between items-center px-10 ps-6 pe-20 text-xs font-medium mb-2 border-b-1">
                    <div className="flex space-x-4 w-36">
                      <img
                        src={cus.profile_img ? cus.profile_img : userimg}
                        alt=""
                        className=" w-10 h-10 rounded"
                      />
                      <div>
                        <p>{cus.first_name}</p>
                        <p>{cus.mobile}</p>
                      </div>
                    </div>
                    <div>
                      <p className="w-56">{cus.email}</p>
                    </div>
                    <div>
                      <p>{cus.zipcode}</p>
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
                ))}
            </>
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
