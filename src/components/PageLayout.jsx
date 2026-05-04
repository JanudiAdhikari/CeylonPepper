import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const PageLayout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default PageLayout;
