import React from "react";
import Accordion from "../About/Accordion";

const FAQ = () => {
  return (
    <div className="p-5 bg-gray-200 rounded-lg">
      <Accordion
        title="Personalized Service"
        answer="We understand that no two travelers are alike. That's why we take the time to understand your preferences, interests, and budget to create a customized itinerary just for you."
      />
      <Accordion
        title="Expertise"
        answer="Our team consists of passionate travel experts who have firsthand knowledge of destinations across the world. Whether you're planning a relaxing beach getaway, an adventurous trek, or a cultural immersion, we have the expertise to make it happen."
      />
      <Accordion
        title="Local Partnerships"
        answer=" We have established strong relationships with local guides, hotels, and vendors in every destination we operate. This allows us to offer you unique experiences and insider access that you won't find elsewhere."
      />
      <Accordion
        title="24/7 Support"
        answer="  From the moment you start planning your trip until you return home, our dedicated team is here to assist you every step of the way. No matter the time zone or the issue, we're just a phone call or email away."
      />
      <Accordion
        title="Customized Itineraries"
        answer="  Let us craft the perfect itinerary tailored to your interests and preferences"
      />
      <Accordion
        title="Group Tours"
        answer=" Join like-minded travelers on one of our expertly curated group tours."
      />
      <Accordion
        title="Solo Travel"
        answer=" Embark on a solo adventure with the confidence of having our support behind you."
      />
      <Accordion
        title="Family Vacations"
        answer="Create cherished memories with your loved ones on a family-friendly vacation."
      />
      <Accordion
        title="Corporate Travel"
        answer=" Plan seamless business trips and corporate retreats with our corporate travel services."
      />
      <Accordion
        title="Special Occasions"
        answer=" Celebrate life's milestones with a special trip designed just for you."
      />
    </div>
  );
};

export default FAQ;
