import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ Sidebarbtn, btnactive, topath, handleContentChange }) => {
  return (
    <aside className="flex flex-col w-2/12 space-y-3 pt-4 h-screen bg-lite-black text-white ">
      {Sidebarbtn?.map((btn, index) => (
        <Link
          className={`${
            btnactive === btn ? "bg-blue-700" : "bg-dark-black"
          } rounded py-3 px-6 mx-2 text-xs flex justify-center`}
          onClick={() => handleContentChange(btn)}
          to={topath ? topath[index] : null}
          key={index}
        >
          {btn}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
