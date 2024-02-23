import React from "react";

const Sidebar = ({ Sidebarbtn, btnactive, handleContentChange }) => {
  return (
    <aside className="flex flex-col w-2/12 space-y-3 pt-4 h-screen bg-lite-black text-white ">
      {Sidebarbtn?.map((btn) => (
        <button
          className={`${
            btnactive === btn ? "bg-blue-700" : "bg-dark-black"
          } rounded py-3 px-6 mx-2 text-xs`}
          onClick={() => handleContentChange(btn)}
        >
          {btn}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
