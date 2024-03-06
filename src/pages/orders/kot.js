import { handleOrderType } from "../../constant";
import kot6 from "../../Assets/images/Group (1).svg";
import kot3 from "../../Assets/images/Group 1867.svg";
import kot2 from "../../Assets/images/Group 1873.svg";
import kot4 from "../../Assets/images/Group.svg";
import kot1 from "../../Assets/images/Mask group.svg";
import kot5 from "../../Assets/images/takeway.svg";
import del from "../../Assets/images/delete.png";
export const kotpage = (orderlist) => {
  const kotorders = orderlist?.pendingOrders;

  const handlekotStatus = (status) => {
    if (Number(status)) {
      if (status === "3") {
        return (
          <div>
            <p className="text-orange-500">Preparing</p>
          </div>
        );
      } else {
        return (
          <div>
            <p className="text-green-500">Ready</p>
          </div>
        );
      }
    } else {
      return (
        <div>
          <p className="text-black">Queue</p>
        </div>
      );
    }
  };
  return (
    <main className="bg-dark-black w-10/12 h-screen">
      <header className="flex mt-5 px-6 text-white font-medium">
        <p>KOT Order</p>
        <div className="flex space-x-5 ms-auto  ">
          <div className="flex items-center space-x-1">
            <img src={kot1} />
            <span className=" text-sm font-medium ">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={kot2} />
            <span className=" text-sm  font-medium  text-dark-orange">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={kot3} />
            <span className="marker: text-sm  font-medium  text-lite-green">
              0
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={kot4} />
            <span className=" text-sm  font-medium text-lite-green">0</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={kot5} />
            <span className=" text-sm  font-medium text-dark-orange">0</span>
          </div>

          <div className="flex items-center space-x-1">
            <img src={kot6} />
            <span className=" text-sm   font-medium text-[#0D9488]">0</span>
          </div>
        </div>
      </header>
      <main className="mt-4">
        {kotorders &&
          kotorders.map((order) =>
            order.status == "kot" ? (
              <div className="flex justify-between items-center p-2 py-3 mx-4 pe-4 border-b-[.5px]  border-gray-600 text-text-lite-white text-xs font-medium">
                <div>
                  <p>{order.order_no}</p>
                  <p>{order.order_items.length} items</p>
                </div>
                <p>{handleOrderType(order.tbl_details)}</p>
                <div>
                  <p>Mex</p>
                  <p>{order.total}</p>
                </div>
                <div className=" flex justify-center items-center w-28 px-2 py-2 rounded-2xl bg-white text-black">
                  <p>{handlekotStatus(order.kotstatus)}</p>
                </div>
                <div className=" bg-lite-black p-2 rounded">
                  <img src={del} alt="" />
                </div>
              </div>
            ) : null
          )}
      </main>
      {/* <div className="flex justify-center items-center relative top-80  text-white font-medium ">
        <p>No KOT Order Details</p>
      </div> */}
    </main>
  );
};
