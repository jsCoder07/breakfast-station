import React from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
const Section = styled.section.attrs({ className: "md:flex" })``;

const LeftDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-2/4 bg-gray-400",
})`
  height: 50vh;
  background: ${(props) => `url(${props.backgroundl}) no-repeat center top`};

  background-size: cover;
  object-fit: cover;
`;
const MiddleDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-2/4 bg-gray-800",
})`
  height: 50vh;
  background: ${(props) => `url(${props.backgroundm}) no-repeat center top`};

  background-size: cover;
  object-fit: cover;
`;
const RightDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-2/4 bg-gray-400",
})`
  height: 50vh;
  background: ${(props) => `url(${props.backgroundr}) no-repeat center top`};

  background-size: cover;
  object-fit: cover;
`;
const ThreeImages = (props) => {
  return (
    <Section>
      <LeftDiv backgroundl={props.backgroundl} data-aos="fade-down"></LeftDiv>
      <MiddleDiv backgroundm={props.backgroundm} data-aos="fade-up"></MiddleDiv>
      <RightDiv backgroundr={props.backgroundr} data-aos="fade-down"></RightDiv>
    </Section>
  );
};

export default ThreeImages;
