import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <SectionImgRight
        title="About Us"
        content={
          "Breakfast Station is one of the coolest restaurants in Lagos; the creation of Helmsmann Companies, and our master Chef.\n\nThe restaurant is an organic space reflective of nature inspired cuisines. The interplay of textures and colour brings life and a vibrance that embraces the restaurant’s place in the dress circle of Lagos. An ode to the our landscape, from the vast ocean floor, to the cracked bark of a paperbark tree, every detail from the ground up has been thoughtfully considered."
        }
        background="../images/about.jpg"
      />
      <Footer />
    </div>
  );
};

export default About;
