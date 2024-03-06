import search from "../../Assets/images/Icon (2).svg";
import del from "../../Assets/images/order-del.svg";
import cash from "../../Assets/images/cash-icon.svg";
import done from "../../Assets/images/Thumb up.svg";
import { handleOrderType } from "../../constant";
import printer from "../../Assets/images/Printer.svg";

export const orderHistory = (orders) => {
  const orderhistory = orders?.pendingOrders;

  return (
    <>
      <main className=" orderpage-div  bg-dark-black w-6/12 p-4">
        <header className="flex justify-between text-white text-sm mt-2 mb-5">
          <h4 className=" font-medium">Order History </h4>
          <div className="flex text-xs space-x-1">
            <p>0 orders</p>
            <p>$ 0.00 Order Value</p>
          </div>
        </header>
        <div className="flex   justify-between space-x-1 w-full box-border pe-14 text-white">
          <input
            type="text"
            className=" ps-4  bg-transparent rounded  w-80 "
            placeholder="Invoice/Order no"
          />
          <input
            type="text"
            className=" ps-4  bg-transparent rounded w-56"
            placeholder="Customer Name"
          />
          <button className="bg-blue-600 p-2 rounded ">
            <img src={search} alt="" />
          </button>
          <button className="bg-lite-black p-2 rounded  text-xs px-3">
            Clear
          </button>
        </div>
        {orderhistory.length ? (
          <section className="mt-2">
            {orderhistory &&
              orderhistory.map((order) =>
                order.status === "Settled" ? (
                  <div
                    className="flex justify-between items-center px-3 text-xs text-white mt-2  py-2 pb-2 border-b-[.5px]  border-gray-600"
                    key={order.id}
                  >
                    <div>
                      <p>{order.order_no}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        <img src={done} alt="" />
                        <span className="text-lite-green">{order.status}</span>
                      </div>
                    </div>

                    <div>
                      <p>Efficient</p>
                      <p>{order.c_ts}</p>
                      <div className="flex items-center space-x-1 pt-1">
                        <img src={cash} alt="" />
                        <span className="text-[#60A5FA]">{order.pay_type}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <p>{handleOrderType(order.tbl_details)}</p>
                    </div>
                    <div>
                      <img src={printer} alt="" />
                    </div>
                    <div className="flex space-x-3 items-center">
                      <span className="text-base font-medium">
                        {order.total}
                      </span>
                      <div className="bg-red-500 p-2 rounded">
                        <img src={del} alt="" width={18} height={18} />
                      </div>
                    </div>
                  </div>
                ) : null
              )}
          </section>
        ) : (
          <div className=" flex justify-center items-center relative top-72   font-medium text-white">
            <p>No Order Found</p>
          </div>
        )}
      </main>
      <div className="w-4/12 bg-lite-black"></div>
    </>
  );
};
