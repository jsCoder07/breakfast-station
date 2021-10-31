import React, { useState } from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Intro from "../components/Intro";
import { SliderData } from "../data/sliderData";
import SectionImgRight from "../components/SectionImgRight";
import SectionImgLeft from "../components/SectionImgLeft";
import ThreeImages from "../components/ThreeImages";
import Footer from "../components/Footer/Footer";
const svgVariant = {
  hidden: { opacity: 0, pathLength: 0, pathSpacing: 0 },
  visible: {
    opacity: 1,
    pathSpacing: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
  exit: {
    display: "none",
    height: "0vh",
    opacity: 0,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};
const svVariant = {
  hidden: { opacity: 0, top: "100vh" },
  visible: {
    top: 0,
    opacity: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [timer, setTimer] = useState(false);

  return (
    <>
      {setTimeout(() => {
        setTimer((timer) => true);
      }, 5000)}
      {timer === false && (
        <motion.div
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          exit="exit "
        >
          <Intro />
        </motion.div>
      )}
      {timer === true && (
        <motion.div variants={svVariant} initial="hidden" animate="visible">
          <Hero slides={SliderData} />
        </motion.div>
      )}
      <SectionImgRight
        title="Menu"
        content="A progression of rare and beautiful ingredients where
            texture, flavour and harmony is paramount. Delve into our dining
            experience with our chef’s Menu and thoughtfully curated Wine List."
        background="./images/homeImg2.jpg"
      />
      <SectionImgLeft
        title="Our Chef"
        content="His appreciation of nature’s diversity and his endless experimentation in the kitchen and garden are the driving forces in his cooking. He leads our team with a focus on excellence, innovation and hospitality."
        background="./images/homeImg3.jpg"
      />
      <SectionImgRight
        title="Events"
        content="Celebrate at our restaurant, with our nice ambience, diligent and friendly staff and an all round welcoming environment in the heart of the Lagos Mainland . From dinner parties in the Dining Room, to large cocktail events we got you covered."
        background="./images/homeImg4.jpg"
      />
      <ThreeImages
        backgroundl="./images/homeImg5.jpg"
        backgroundm="./images/homeImg6.jpg"
        backgroundr="./images/homeImg7.jpg"
      />
      <ThreeImages
        backgroundl="./images/homeImg8.jpg"
        backgroundm="./images/homeImg9.jpg"
        backgroundr="./images/homeImg10.jpg"
      />
      <Footer />
    </>
  );
};

export default Home;
