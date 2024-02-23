import kot6 from "../Assets/images/Group (1).svg";
import kot3 from "../Assets/images/Group 1867.svg";
import kot2 from "../Assets/images/Group 1873.svg";
import kot4 from "../Assets/images/Group.svg";
import kot1 from "../Assets/images/Mask group.svg";
import kot5 from "../Assets/images/takeway.svg";

const kotpagee = () => {
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
      <div className="flex justify-center items-center relative top-80  text-white font-medium ">
        <p>No KOT Order Details</p>
      </div>
    </main>
  );
};
export const kotpage = kotpagee();
