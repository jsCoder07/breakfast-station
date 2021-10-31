import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";
import SectionImgLeft from "../components/SectionImgLeft";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <ContactForm
        title="Contact Us"
        background="../images/contactfrm.jpg"
      ></ContactForm>

      <SectionImgRight title="How To Get Here" background="../images/1.jpg" />
      <SectionImgLeft title="CAR PARKING" background="../images/parking.jpg" />
      <SectionImgRight
        title="OTHER CONTACTS"
        background="../images/other.jpg"
      />
      <Footer />
    </div>
  );
};

export default Contact;
