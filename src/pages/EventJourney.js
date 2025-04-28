import React from "react";
import "../CSS/EventJourney.css"; // External CSS file

const EventJourney = () => {
  return (
    <div className="event-journey">
      {/* Heading Section */}
      <div className="heading-section">
        <h1 className="event-heading">Events</h1>
        <p className="subheading">Explore our journey of events and experiences.</p>
        <p className="subheading">Join us in creating memorable moments!</p>
        <p className="subheading">Discover how our events bring communities together.</p>

      </div>

      {/* Row 1: Content Left, Image Right */}
      <div className="row-line1">
        <div className="content-event1">
          <h2>Event 1: Healthcare Summit</h2>
          <p>
            Join us for an inspiring healthcare summit where experts from around 
            the globe gather to share knowledge, innovations, and advancements in 
            medical science. Discover cutting-edge solutions to today's challenges.
          </p>
          <p>Learn, connect, and grow with leaders in the healthcare industry.</p>
        </div>
        <div className="image-event1">
          <img src="/images/event1.png" alt="Healthcare Summit" />
        </div>
      </div>

      {/* Row 2: Image Left, Content Right */}
      <div className="row-line2">
        <div className="image-event2">
          <img src="/images/event2.png" alt="Community Outreach" />
        </div>
        <div className="content-event2">
          <h2>Event 2: Community Outreach</h2>
          <p>
            Our community outreach program focuses on spreading health awareness 
            and providing free check-ups to those in need. Be a part of this 
            transformative initiative that is making a difference.
          </p>
          <p>Together, we can build a healthier and stronger community.</p>
        </div>
      </div>

      {/* Row 3: Content Left, Image Right */}
      <div className="row-line3">
        <div className="content-event3">
          <h2>Event 3: Wellness Workshop</h2>
          <p>
            Attend our wellness workshop to learn about holistic health practices 
            and strategies to improve your mental and physical well-being. Explore 
            mindfulness, yoga, and nutrition tips from the best trainers.
          </p>
          <p>Your journey to a healthier you starts here.</p>
        </div>
        <div className="image-event3">
          <img src="/images/event3.png" alt="Wellness Workshop" />
        </div>
     
      </div>
      <div className="more-button-container">
    <button className="more-buttons">More</button>
  </div>
    </div>
  );
};

export default EventJourney;
