import search from "../../Assets/images/Icon (2).svg";

const splitpagee = () => {
  return (
    <>
      <main className="split bg-dark-black w-6/12 p-4">
        <header className="flex justify-between text-white text-sm mt-2 mb-5">
          <h4 className=" font-medium">Split History </h4>
        </header>
        <div className="flex   justify-between space-x-2  w-full box-border pe-14 text-white">
          <input
            type="text"
            className=" ps-4  bg-transparent rounded  w-80 "
            placeholder="Split Type Amount/item"
          />
          <input
            type="text"
            className=" ps-4  bg-transparent rounded w-56"
            placeholder="Invoice/Order no"
          />
          <button className="bg-blue-600 p-2 rounded ">
            <img src={search} alt="" />
          </button>
          <button className="bg-lite-black p-2 rounded  text-xs px-3">
            Clear
          </button>
        </div>
        <div className=" flex justify-center items-center relative top-72   font-medium text-white">
          <p>No Order Found</p>
        </div>
      </main>
      <div className="w-4/12 bg-lite-black"></div>
    </>
  );
};

export const splitpage = splitpagee();
