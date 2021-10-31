import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
const Section = styled.section.attrs({ className: "md:flex" })`
  background: #ebe9e6; ;
`;

const LeftDiv = styled.div.attrs({
  className: "w-full flex justify-center h-64 px-16 flex-col",
})`
  background: #dce4e7;
  p {
    font-family: "OakesGroteskRegular";
    color: #373d48;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: normal;

    font-weight: 400;
    text-transform: none;
  }
  h2 {
    font-family: "OakesGroteskBold";
    color: #1a1a1a;
    font-size: 42px;
    line-height: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
const SubscribeBtn = styled.button`
  border: 2px solid #333;
  font-family: "OakesGroteskBold";
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #333;
  padding: 0.5em;
  max-width: 200px;
  margin-top: 1em;
  text-transform: uppercase;
`;
const RightDiv = styled.div.attrs({
  className: "w-full flex flex-col justify-center h-64 px-16 md:px-32",
})`
  background: #dce4e7;
`;
const TopFooter = () => {
  return (
    <Section>
      <LeftDiv data-aos="fade-right">
        <h2>Keep up to date with us</h2>
        <p>
          Sign up to be the first to receive special news and event updates from
          us.
        </p>
      </LeftDiv>
      <RightDiv data-aos="fade-down">
        <input
          type="email"
          placeholder="email address"
          style={{ maxWidth: "400px", padding: "0.5rem" }}
        />
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </RightDiv>
    </Section>
  );
};

export default TopFooter;
