import React from 'react';
import Home from './Home';
import Domain from './Domain';
import Milestones from './Milestones';
import Documents from './Documents';
import Presentations from './Presentations';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const SinglePage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="domain">
        <Domain />
      </section>

      <section id="milestones">
        <Milestones />
      </section>

      <section id="documents">
        <Documents />
      </section>

      <section id="presentations">
        <Presentations />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default SinglePage;
