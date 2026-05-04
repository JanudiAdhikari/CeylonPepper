import React from 'react';
import Home from './Home';
import Domain from './Domain';
import Milestones from './Milestones';
import Documents from './Documents';
import Presentations from './Presentations';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const SectionDivider = () => (
  <div style={{
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(26,107,46,0.15), transparent)',
    margin: '0',
  }} />
);

const SinglePage = () => {
  return (
    <div>
      <section id="home"><Home /></section>
      <SectionDivider />
      <section id="domain"><Domain /></section>
      <SectionDivider />
      <section id="milestones"><Milestones /></section>
      <SectionDivider />
      <section id="documents"><Documents /></section>
      <SectionDivider />
      <section id="presentations"><Presentations /></section>
      <SectionDivider />
      <section id="about"><AboutUs /></section>
      <SectionDivider />
      <section id="contact"><ContactUs /></section>
    </div>
  );
};

export default SinglePage;