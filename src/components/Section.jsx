import React from "react";

const Section = ({ title, children, ...props }) => {
  // this ... is rest property and  this groups all the remaining properties of an object into new object named as props
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
