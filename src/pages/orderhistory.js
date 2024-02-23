import search from "../Assets/images/Icon (2).svg";
import del from "../Assets/images/order-del.svg";
import cash from "../Assets/images/cash-icon.svg";
import done from "../Assets/images/Thumb up.svg";
import takeway from "../Assets/images/takeway.svg";

const orderpagee = () => {
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
        <section className="mt-2">
          <div className="flex justify-between items-center px-3 text-xs text-white mt-2">
            <div>
              <p>EZYODR26</p>
              <div className="flex items-center space-x-1 mt-2">
                <img src={done} alt="" />
                <span className="text-lite-green">settled</span>
              </div>
            </div>

            <div>
              <p>Efficient</p>
              <p>22-02-2024</p>
              <div className="flex items-center space-x-1 pt-1">
                <img src={cash} alt="" />
                <span className="text-[#60A5FA]">Cash</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <img src={takeway} alt="" width={16} height={16} />
              <p className="text-dark-orange font-medium">Take Away</p>
            </div>
            <div>
              {/* <img src="" alt="" /> */}
              <p>Print</p>
            </div>
            <div className="flex space-x-3 items-center">
              <span className="text-base font-medium">27.00</span>
              <div className="bg-red-500 p-2 rounded">
                <img src={del} alt="" width={18} height={18} />
              </div>
            </div>
          </div>
        </section>

        {/* <div className=" flex justify-center items-center relative top-72   font-medium text-white">
          <p>No Order Found</p>
        </div> */}
      </main>
      <div className="w-4/12 bg-lite-black"></div>
    </>
  );
};
export const orderpage = orderpagee();
