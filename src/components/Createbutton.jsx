import React from "react";

const Createbutton = ({ name, color }) => {
  return (
    <div className="butten-div">
      <button style={{ backgroundColor: color }}>{name}</button>
    </div>
  );
};

export default Createbutton;
