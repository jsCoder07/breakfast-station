import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";

const Safety = () => {
  return (
    <div>
      <SectionImgRight
        title="Covid-Safe House Policy"
        content="As a group, Helmsmann is taking every possible preventative measure to ensure that guests, staff and suppliers of Helmsmann, are protected from potential transmission of COVID-19."
        background="../images/covid.jpg"
      />
      <div></div>
      <Footer />
    </div>
  );
};

export default Safety;
