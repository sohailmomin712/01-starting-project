import React from "react";

const Tabs = ({ children, buttons }) => {
  return (
    <div>
    {/* buttons slot set with custom prop buttons */}
      <menu>{buttons}</menu>
      {/* content slot set with childeren */}
      {children}
    </div>
  );
};

export default Tabs;
