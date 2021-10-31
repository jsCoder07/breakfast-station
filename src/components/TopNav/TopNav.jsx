import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
import classes from "./TopNav.module.css";

import LeftNav from "./LeftNav";
import BurgerMenu from "./BurgerMenu";
import logo from "../../images/logo.svg";
const Nav = styled.nav.attrs({
  className: "nm-flat-gray-100 flex p-2",
})`
  height: 70px;
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  

  div {
    
    img{
      display:flex;
      justify-content:end;
      
    }
  }
`;
const ReserveBtn = styled.button`
  border: 2px solid #333;
  font-family: "OakesGroteskBold";
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #333;
  padding: 0.5em 2em;
  text-transform: uppercase;
`;

const LogoImg = styled.img.attrs({
  className: "cursor-pointer ",
  src: "../../images/logo.png",
})``;

const TopNav = () => {
  return (
    <Nav>
      <div className={classes.navContainer}>
      <div>
          <BurgerMenu />
      </div>
       <div>
          {/* <img width={100} src={logo} alt="Breakfast Station Logo"/> */}
        </div>
        <div>
          <ReserveBtn>Make a Reservation</ReserveBtn>
        </div>
      </div>
    </Nav>
  );
};

export default TopNav;
