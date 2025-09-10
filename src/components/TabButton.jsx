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
const TabButton = ({ children ,onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
