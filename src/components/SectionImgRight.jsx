import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
import Aos from "aos";
import "aos/dist/aos.css";
const Section = styled.section.attrs({ className: "md:flex" })``;

const LeftDiv = styled.div.attrs({
  className: "w-full flex items-center  h-screen",
})`
  background: #ebe9e6;

  h2 {
    color: #1a1a1a;
    font-family: "OakesGroteskBold";
    font-size: clamp(20px, 40px, 50px);
    line-height: 50px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  h1 {
    color: #1a1a1a;
    font-family: "OakesGroteskBold";
    font-size: clamp(20px, 20px, 25px);
    line-height: 50px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5rem;
    text-decoration: underline;
  }
  p {
    color: #1a1a11;
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 25px;
    font-weight: 400;
    letter-spacing: 2px;
    white-space: pre-wrap;
    margin-bottom: 1rem;
  }
  strong {
    color: #1a1a11;
    font-family: "OakesGroteskBold";
    font-size: 14px;
    line-height: 25px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  div {
    @media (min-width: 1280px) {
      margin: auto;
      width: 70%;
    }
    margin: auto;
    width: 90%;
  }
`;
const ImgDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-screen bg-gray-800",
})`
  background: ${(props) => `url(${props.background}) no-repeat center top`};

  background-size: cover;
  object-fit: cover;
`;

const SectionImgRight = (props) => {
  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Section>
      <LeftDiv>
        <div data-aos="fade-up">
          <h1>{props.main}</h1>
          <h2>{props.title}</h2>
          <p>{props.intro}</p>
          <strong>{props.sub1}</strong>
          <p>{props.sub1content}</p>
          <strong>{props.sub2}</strong>
          <p>{props.sub1content}</p>
          <p style={{ marginTop: "2rem" }}>{props.precontent}</p>

          <p>{props.content}</p>
        </div>
      </LeftDiv>
      <ImgDiv background={props.background} data-aos="fade-down"></ImgDiv>
    </Section>
  );
};

export default SectionImgRight;
