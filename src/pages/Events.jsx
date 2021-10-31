import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import Footer from "../components/Footer/Footer";
import SectionImgLeft from "../components/SectionImgLeft";
import EventForm from "../components/EventForm";

const Events = () => {
  return (
    <div>
      <SectionImgRight
        title="Events"
        content="Celebrate in the heart of Lagos at our beautiful restaurant, with panoramic views encompassing the State House and Magodo GRA. Enjoy intimate dinner parties in the Private Dining Room."
        background="../images/1.jpg"
      />
      <SectionImgLeft
        title="Weddings"
        content={
          "We love helping couples say 'I do.' We’ll be by your side every step of the way to make your special day truly memorable.Wedding reflects your love and personality as a couple and we work tirelessly to bring your vision to life.\n\nCreative menu options make for an unforgettable culinary experience that you and your guests won’t forget. Our chefs are masters of their craft and build every plate with care and consideration, ensuring only the highest quality food makes it to your table."
        }
        background="../images/7.jpg"
      />
      <SectionImgRight
        title="Birthdays"
        content={
          "Our birthday party catering is a hassle-free way to plan a party in no time. Throw the best-themed party with corresponding themed foods at separate food stations. Furthermore, all dietary requirements of your guests will be taken care of.\n\nHiring our professional caterer for the special event will make the day a grand success.\n\nLet our appetizers, bartenders and balloons set an ambience of grandness on your special day."
        }
        background="../images/6.jpg"
      />
      <SectionImgLeft
        title="Cooperate"
        content={
          "We’re serious about your business’s success. Corporate gatherings are our specialty and we love planning them. Companies trust us to plan and execute events of distinction. In addition to bringing incredible service and customized menus to the table, we also leverage our strong partnerships across the industry to create unforgettable events that leave a lasting impression on your guests.\n\nWhether you’re hosting a business mixer, product launch, award ceremony or grand opening, lean on our experience for an incredible and stress-free event. "
        }
        background="../images/4.jpg"
      />
      <SectionImgRight
        title="Social"
        content={
          "We like to think an unforgettable party starts with great people and only gets better with amazing food. Whether you want to throw a party on a grand scale or host an intimate gathering, we can help you create an amazing event for any occasion, including anniversaries, graduation parties, dinners, holiday parties, retirement parties and more.\n\nOur team provides impeccable service and mouthwatering menus that will leave you and your guests with happy hearts and satisfied pallets."
        }
        background="../images/5.jpg"
      />
      <SectionImgLeft
        title="Conventions"
        content={
          "Ready to throw a party of epic proportions? Trust our team to see the big picture and make your larger-than-life ideas a reality.Hack your conference and step up to the next level. Create a mashup of engagement and entertainment to throw a party of epic proportions.\n\nOur Event Designers have decades of experience working with clients across the nation and abroad that will create an event that leaves your guests excited and inspired."
        }
        background="../images/convention.jpg"
      />
      <SectionImgRight
        title="FundRaising"
        content={
          "We’d be privileged to help nonprofits and businesses raise funds and support for important causes and programs through incredible events. It’s an honor to help your organizations reach meaningful goals that make a real difference.\n\nWe recognize the work of nonprofits is vitally important, and our goal is to create events that help shine a spotlight on an organization’s vision. Our Event Designers will work closely with you to bring that specific vision to life through an event that makes an impact and inspires action.\n\nOur team has lots of experience working with nonprofits and planning philanthropic events, charity auctions, black tie galas and more, so you can trust the event planning process will be smooth and stress-free."
        }
        background="../images/3.jpg"
      />
      <EventForm title="Event Enquiry" background="../images/2.jpg"></EventForm>
      <Footer />
    </div>
  );
};

export default Events;
