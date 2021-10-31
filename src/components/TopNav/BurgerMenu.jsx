import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import LeftNav from "./LeftNav";
const StyledBurger = styled.div`
  position: fixed;
  width: 48px;
  height: 42px;
  z-index: 20;
  top: 15px;
  left: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  transition: all 0.3s linear;
  &:hover {
    .center {
      width: 30px;
      transition: 0.3s;
    }
    div {
      width: 42px;
      transition: 0.3s;
    }
  }

  div {
    margin: auto;
    width: 48px;
    height: 3px;
    background-color: ${({ open }) => (open ? "#777" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transition: all 0.3s linear;
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? "0" : "translateX(1)")};
      transition: all 0.3s linear;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transition: all 0.3s linear;
    }
  }
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div></div>
        <div className="center"></div>
        <div></div>
      </StyledBurger>
      <LeftNav open={open} setOpen={setOpen} />
    </>
  );
};

export default BurgerMenu;
