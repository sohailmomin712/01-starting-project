import React from "react";

// const TabButton = ({label}) => {
//   return (
//  <li>
//     <button>{label}</button>
//  </li>
//   )
// }

// or by using object destructuring
//childeren is inbuilt prop basically
const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
