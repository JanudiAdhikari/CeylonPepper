import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
