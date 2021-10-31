import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { SliderData } from "../data/sliderData";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
const HeroSection = styled.section.attrs({ className: "h-screen" })`
  max-height: 1100px;
  overflow: hidden;
  position: relative;
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;
const HeroWrapper = styled.section.attrs({ className: "" })`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const arrowButtons = css`
  width: 50px;
  height: 50px;
  user-select: none;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  margin-right: 1rem;
  padding: 10px;
  transition: 3s;
  background: #000d1a;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const HeroSlide = styled.div.attrs({ className: "" })`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const HeroSlider = styled.div.attrs({ className: "" })`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.9;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled.img.attrs({ className: "" })`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const HeroContent = styled.div.attrs({ className: "" })`
  position: absolute;
  z-index: 10;
  top: 45%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  /* max-width: 1600px;
  width: calc(100%-100px); */
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;

const SliderButton = styled.div.attrs({ className: "" })`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const slideLenght = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === slideLenght - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, slideLenght]);

  const nextSlide = () => {
    setCurrent(current === slideLenght - 1 ? 0 : current + 1);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? slideLenght - 1 : current - 1);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };
  return (
    <HeroSection className="">
      <HeroWrapper>
        {SliderData.map((item, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={item.image} alt={item.alt} />
                  <HeroContent>
                    <h1 className="">{item.title}</h1>
                    <Link to="{item.path}">
                      <button
                        to={item.path}
                        className="bg-gray-100 px-4 py-2 text-gray-500 flex rounded-xl"
                        css={`
                          align-items: center;
                        `}
                      >
                        {item.label}
                        <Arrow />
                      </button>
                    </Link>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButton>
          <PrevArrow onClick={previousSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButton>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
