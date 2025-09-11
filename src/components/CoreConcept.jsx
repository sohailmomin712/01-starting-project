import React from "react";
import { CORE_CONCEPTS } from "../data";

// Child component for each item
const ConceptItem = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

// Parent component
const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2 style={{ textAlign: "center" }}>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <ConceptItem key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcept;
