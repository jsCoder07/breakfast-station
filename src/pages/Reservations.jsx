import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";

const Reservations = () => {
  return (
    <div>
      <SectionImgRight
        title="Reservations"
        content="At Breakfast Station we are taking every possible preventative measure to ensure the health and safety of our guests, staff and suppliers. We have implemented a Covid-Safe House Policy which you can view here. As a result of the practices we are putting in place, we can assure that you are dining in the safest environment possible."
        intro="BreakFast Station has reopened"
        sub1="Lunch"
        sub1content={"Saturday and Sunday \nReservations from 12pm to 1.30pm"}
        sub2="DINNER"
        sub2content={"Thursday to Sunday \nReservations from 6pm to 8.45pm"}
        precontent="Bookings are essential. View our Reservations Policy here."
        background="./images/reservation.jpg"
      />
      <Footer />
    </div>
  );
};

export default Reservations;
