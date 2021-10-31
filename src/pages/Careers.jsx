import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";
import ThreeImages from "../components/ThreeImages";

const Careers = () => {
  return (
    <div>
      <SectionImgRight
        title="Careers"
        content={
          "Helmsmann is looking for passionate people to join our teams in Lagos and Houston.\n\nBy joining Helmsmann, you will become a part of one of the country’s leading groups. Offering attractive staff benefits, competitive salary and opportunities for development and career progression, Helmsmann is a well-established, stable employer, with a passion for discovering, training and championing emerging talent within the hospitality industry.\n\nHelmsmann is actively hiring across all venues and teams. To apply for an advertised position, or simply to have a chat about opportunities with Helmsmann, please send your resume to us at careers@breakfast.ng."
        }
        background="../images/career.jpg"
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

export default Careers;
