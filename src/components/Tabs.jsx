import React, { Component } from "react";

const Tabs = ({ children, buttons, ButtonsContainer }) => {
  //   const ButtonContainer = buttonsContainer;
  //   here we are creating a varible ButtonContainer in this case that can be used as a custom Component
  return (
    <>
      {/* buttons slot set with custom prop buttons */}
      {/* <ButtonContainer>{buttons}</ButtonContainer> */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* content slot set with childeren */}
      {children}
    </>
  );
};

export default Tabs;
