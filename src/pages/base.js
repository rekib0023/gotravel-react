import React from "react";
import Menu from "../components/menu";

const Base = ({ children }) => {
  return (
    <div className="">
      <Menu />
      <div>{children}</div>
    </div>
  );
};
export default Base;
