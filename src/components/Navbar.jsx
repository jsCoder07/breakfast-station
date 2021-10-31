import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import { motion } from "framer-motion";
import Bars from "./icons/svgReg/fi-rr-align-right.svg";
const svgVariant = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};
const Nav = styled.nav.attrs({
  className: "nm-flat-gray-100 flex justify-between px-8",
})`
  height: 45px;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const NavStyle = css`
  display: flex;
  align-items: center;

  padding: 0 1rem;
  cursor: pointer;
`;
const LogoLink = styled(Link)``;
const NavItem = styled(Link)`
  ${NavStyle}
`;
const LogoImg = styled.img.attrs({
  className: "cursor-pointer ",
  src: "../images/logo.png",
})`
  ${NavStyle};
  height: 44px;
`;
const MenuBars = styled.i.attrs({
  className: "block",
})`
  background-image: url(${Bars});
  background-size: contain;
  height: 20px;
  width: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 70%);
`;
const NavMenus = styled.div.attrs({
  className: " hidden",
})`
  align-items: center;
`;
const Navbar = () => {
  return (
    <Nav>
      <LogoLink to="/">
        <motion.div variants={svgVariant} initial="hidden" animate="visible">
          <LogoImg />
        </motion.div>
      </LogoLink>
      <MenuBars />
      <NavMenus>
        {menuData.map((item, index) => (
          <NavItem to={item.link} key={index}>
            {item.title}
          </NavItem>
        ))}
      </NavMenus>
    </Nav>
  );
};

export default Navbar;
