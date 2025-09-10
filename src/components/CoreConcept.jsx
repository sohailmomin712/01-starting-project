import React from "react";
import componentsImg from "../assets/components.png";
import { CORE_CONCEPTS } from "../data";

// const CoreConcept = (props) => {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// };

// destructuring array properties while using them as a parameter
const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
