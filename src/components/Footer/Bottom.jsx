import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
const Section = styled.section.attrs({ className: "md:flex" })``;

const LeftDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-16 bg-gray-400",
})`
  background: #1a1a1a;

  font-family: "OakesGroteskRegular";
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ffffff;

  padding: 0.4em 0;
`;

const Bottom = () => {
  return (
    <Section>
      <LeftDiv>Breakfast Station 2021. All rights reserved</LeftDiv>
    </Section>
  );
};

export default Bottom;
