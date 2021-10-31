import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import styled, { css } from "styled-components/macro";
const Section = styled.section.attrs({ className: "md:flex" })``;
const SubmitBtn = styled.button`
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
const RightDiv = styled.div.attrs({
  className: "w-full flex items-center  h-screen",
})`
  background: #ebe9e6;
  input {
    width: 100%;
    padding: 0.7rem 2rem;
    margin: 0.5rem auto;
    border: 1px solid #1a1a11;
  }
  textarea {
    padding: 0.7rem 2rem;
    width: 100%;
    border: 1px solid #1a1a11;
    min-height: 200px;
  }
  input.half {
    width: 48%;
    padding: 0.7rem 2rem;
    margin: 0.5rem 0;
    border: 1px solid #1a1a11;
  }
  h2 {
    color: #1a1a1a;
    font-family: "OakesGroteskBold";
    font-size: clamp(20px, 40px, 50px);
    line-height: 50px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
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
const EventForm = (props) => {
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
      <ImgDiv background={props.background} data-aos="fade-up"></ImgDiv>
      <RightDiv>
        <div data-aos="fade-down">
          <h2>{props.title}</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <input type="text" placeholder="Mobile" className="half" />
            <input type="text" placeholder="Date" className="half" />
          </div>
          <textarea placeholder="Message"></textarea>
          <SubmitBtn>Submit</SubmitBtn>
        </div>
      </RightDiv>
    </Section>
  );
};

export default EventForm;
