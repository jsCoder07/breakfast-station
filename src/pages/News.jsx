import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";
import ThreeImages from "../components/ThreeImages";

const News = () => {
  return (
    <div>
      <SectionImgRight
        background="./images/news.jpg"
        title="Christmas Day Party"
        main="Latest News"
        content="Experience unforgettable service and a decadent five-course menu by our Chef Christmas Day with a memorable lunch at Breakfast Station."
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
    </div>
  );
};

export default News;
