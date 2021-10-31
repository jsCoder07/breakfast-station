import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const Ul = styled.ul.attrs({
  className: "nm-flat-gray-100",
})`
  flex-flow: column nowrap;
  list-style: none;
  position: fixed;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  height: 100vh;
  width: 350px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  li {
    padding: 15px 18px;
    font-family: "OakesGroteskBold";
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    text-transform: uppercase;
    color: #000;
  }
`;
const LeftNav = (props) => {
  return (
    <Ul open={props.open}>
      <Link
        to="/"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Home</li>
      </Link>
      <Link
        to="/about"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>About</li>
      </Link>
      <Link
        to="/menu"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Menu</li>
      </Link>
      <Link
        to="/reservations"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Reservations</li>
      </Link>
      <Link
        to="/events"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Events</li>
      </Link>
      <Link
        to="/news"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>News</li>
      </Link>

      <Link
        to="/careers"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Career</li>
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Contact</li>
      </Link>
      <Link
        to="/safety"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Health & Safety</li>
      </Link>
    </Ul>
  );
};

export default LeftNav;
