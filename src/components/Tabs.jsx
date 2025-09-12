import React, { Component } from "react";

const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
  //   const ButtonContainer = buttonsContainer;
  return (
    <>
      {/* buttons slot set with custom prop buttons */}
      {/* //here we are using a varible ButtonContainer in this case that can be used as a custom Component */}
      {/* <ButtonContainer>{buttons}</ButtonContainer> */}
      {/* content slot set with childeren */}

      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
