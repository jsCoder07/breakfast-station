import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
import LogoSvg from "../../images/logo.svg";
const Section = styled.section.attrs({ className: "md:flex" })`
  background: #d5dddb;
`;

const LeftDiv = styled.div.attrs({
  className: "w-full md:flex  md:w-2/3  bg-gray-400 my-1",
})`
  background: #d5dddb;
  width: 100%;
`;
const Logo = styled.div.attrs({
  className: "w-full flex items-center   bg-gray-300 my-1",
})`
  display: block;
`;
const LeftLinks = styled.div.attrs({
  className: "w-full md:flex flex-col px-16",
})`
  background: #d5dddb;
  h3 {
    font-family: "OakesGroteskBold";
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1a1a1a;
    padding: 0.4em 0;
  }
  li {
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: none;
    color: #000;
    list-style: none;
    padding: 0.2em 0;
  }
`;

const RightLinks = styled.div.attrs({
  className: "w-full md:flex  flex-col   px-16",
})`
  background: #d5dddb;
  h3 {
    font-family: "OakesGroteskBold";
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1a1a1a;
    padding: 0.4em 0;
  }
  p {
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: none;
    color: #000;

    padding: 0.4em 0;
  }
`;
const MidDiv = styled.div.attrs({
  className: "w-full flex flex-col md:w-full px-16",
})`
  height: auto;
  background: #d5dddb;
  overflow: hidden;
  h3 {
    font-family: "OakesGroteskBold";
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1a1a1a;
    padding: 0.4em 0;
    margin-bottom: 1em;
  }
  p {
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: none;
    color: #000;

    padding: 0.4em 0;
  }
`;
const RightDiv = styled.div.attrs({
  className: "w-full md:w-1/3 flex justify-center px-16 flex-col",
})`
  clear: both;
  height: auto;
  background: #dce4e7;
  h1 {
    font-family: "OakesGroteskBold";
    font-size: 42px;
    line-height: 44px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #000000;
    padding: 0.4em 0;
    margin-bottom: 1em;
  }

  li {
    font-family: "OakesGroteskRegular";
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #000;
    list-style: none;
    padding: 0.2em 0;
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
  margin: 1em 0;
`;
const MidFooter = () => {
  return (
    <Section>
      <div>
        <img src={LogoSvg} style={{ marginLeft: "1em" }} data-aos="flip-up" />
        <LeftDiv>
          <LeftLinks data-aos="fade-down">
            <h3>Sitemap</h3>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <Link to="/reservations">
              <li>Reservations</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/news">
              <li>News</li>
            </Link>

            <Link to="/careers">
              <li>Career</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/safety">
              <li>Health & Safety</li>
            </Link>
          </LeftLinks>
          <RightLinks data-aos="slide-up">
            <h3>Location</h3>
            <p>
              16 L.J. Dosumu St, Alausa 100282, Ikeja phone: +234 906 000 6225
            </p>
            <h3>Opening Hours</h3>
            <p>
              <h4>LUNCH</h4> Saturday and Sunday Reservations from 12pm to
              1.30pm
            </p>
            <p>
              <h4>DINNER</h4> Thursday to Sunday Reservations from 6pm to 8.45pm
            </p>
          </RightLinks>
          <MidDiv data-aos="fade-down">
            <h3>Reservations</h3>
            <ReserveBtn>Make a Reservation</ReserveBtn>
            <p>
              We acknowledge the Traditional Custodians of this land upon which
              we sits, the Yoruba Nation. We recognise their continuing
              connection and unique cultural and spiritual relationship to the
              land, water and community. We pay our deepest respects to them and
              their culture, and to Elders, past, present and emerging.
            </p>
          </MidDiv>
        </LeftDiv>
      </div>
      <RightDiv data-aos="slide-up">
        <h1>Helmsmann</h1>
        <Link to="">
          <li>HelmsSports</li>
        </Link>
        <Link to="">
          <li>HelmsShipping</li>
        </Link>
        <Link to="">
          <li>HelmsCars</li>
        </Link>
        <Link to="/">
          <li>BreakFastStation</li>
        </Link>
      </RightDiv>
    </Section>
  );
};

export default MidFooter;
