import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";

const Menu = () => {
  return (
    <div>
      <SectionImgRight
        title="Menu"
        content={
          "BreakFast Station is a progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. \n\nContinually inspired by nature, the creative process begins in working closely with the farmers, fishermen, producers and artisans who cultivate bespoke produce exclusively for Us. For each dish, the growth of every element and the selection of every ceramic piece is carefully considered and crafted for its role in the dining experience. \n\nWe bring a personal, interactive passage for diners through our culinary evolution."
        }
        background="../images/menu.jpg"
      />
      <Footer />
    </div>
  );
};

export default Menu;
