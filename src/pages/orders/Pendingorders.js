import React, { useEffect, useState } from "react";
import tick from "../../Assets/images/Group 1579.svg";
import done from "../../Assets/images/Thumb up.svg";
import arrow from "../../Assets/images/up-down 1.svg";
import takeway from "../../Assets/images/takeway.svg";
import del from "../../Assets/images/delete.png";
import search from "../../Assets/images/Icon (2).svg";
import { useDispatch, useSelector } from "react-redux";
import { pendingOrdersArray } from "../../Redux/Orders/reducer";
import { SelectedPendingAction } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";

const Pendingorders = () => {
  const Nav = useNavigate();
  const Dispatch = useDispatch();
  const [pendingordeslist, setpendingordeslist] = useState([]);

  const order = useSelector(pendingOrdersArray);
  useEffect(() => {
    setpendingordeslist(order?.pendingOrders);
  }, [order]);

  const handleSelect = (item) => {
    Dispatch(SelectedPendingAction(item));
    Nav("/home");
    // console.log(item);
  };
  return (
    <main className="pending-div   flex flex-col   justify-between pending-order p-4 bg-dark-black w-10/12  h-screen text-white">
      <div>
        <div className="w-4/6 mt-2 mb-5">
          <h4 className="mb-5 font-semibold">Pending Order</h4>
          <div className="flex   justify-between space-x-2  w-full box-border pe-20 text-white">
            <input
              type="text"
              className=" ps-4  bg-transparent rounded w-80 "
              placeholder="Customer Name/mobile"
            />
            <input
              type="text"
              className=" ps-4  bg-transparent rounded w-72"
              placeholder="Invoice/Order no"
            />
            <button className="bg-blue-600 p-2 rounded ">
              <img src={search} alt="" />
            </button>
            <button className="bg-lite-black p-2 rounded  text-xs px-3">
              Clear
            </button>
          </div>
        </div>

        {pendingordeslist &&
          pendingordeslist.map((item) =>
            item.status === "Draft" ? (
              <div
                className="flex justify-between pe-5 ps-1 pb-4 pt-2 border-b-[.5px]  border-gray-600 "
                key={item.id}
              >
                <div className="flex justify-between w-2/4 text-xs font-medium">
                  <div className="flex flex-col items-start space-y-2">
                    <p>{item.order_no}</p>
                    <div className="flex justify-center text-lite-green  space-x-2">
                      <img src={done} alt="" />
                      <p> {item.status}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p>Guest</p>
                    <p>{item.c_ts}</p>
                  </div>
                  <div className="flex items-center text-dark-orange space-x-2 text-xs">
                    <img src={takeway} alt="" width={15} height={15} />
                    <p>Take Away {item.is_takeaway}</p>
                  </div>
                </div>
                <div className="flex justify-between w-1/4 items-center  ps-6 ">
                  <p>{item.total}</p>
                  <button className="bg-lite-black p-3 rounded ms-8">
                    <img src={arrow} alt="" />
                  </button>
                  <button
                    className="bg-lite-black p-3 rounded "
                    onClick={() => handleSelect(item.order_items)}
                  >
                    <img src={tick} alt="" width={12} height={12} />
                  </button>
                  <button className="bg-lite-black p-3 rounded">
                    <img src={del} alt="" width={12} height={12} />
                  </button>
                </div>
              </div>
            ) : null
          )}
      </div>
      <div className=" flex  items-center  justify-between px-6 mb-16 ">
        <div className="flex items-center  ">
          <div className="flex  items-center  space-x-2 text-xs">
            <p>Page Size</p>
            <select
              name=""
              id=""
              className="bg-dark-black border px-2 py-1  rounded-sm"
            >
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
            </select>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"></div>
          </div>
          <div>
            <p class=" text-white space-x-1 text-xs">
              Showing
              <span class="font-medium px-1">1</span>
              to
              <span class="font-medium px-1">10</span>
              of
              <span class="font-medium px-1">97</span>
              results
            </p>
          </div>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md  shadow-sm bg-[#111827]   "
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative text-xs inline-flex items-center rounded-l-md px-2 py-0 text-gray-400   ring-1 ring-inset ring-neutral-500 "
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5 font-medium"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-current="page"
              class="relative z-10   px-3 py-1 text-sm font-semibold text-white ring-1 ring-inset ring-neutral-500  "
            >
              1
            </a>

            <a
              href="#"
              class="relative inline-flex items-center rounded-r-md px-2 py-0 text-gray-400 ring-1 ring-inset  ring-neutral-500"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5 font-medium"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Pendingorders;
