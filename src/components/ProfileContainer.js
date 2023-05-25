import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './header';
import Footer from './footer';
import AboutMe from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/styles.css';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // render header and footer here at some point
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const renderFooter = () => {
    return <Footer />
  }

  const renderHeader = () => {
    return <Header />
  }

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {renderHeader()}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {renderFooter()}
    </div>
  );
}
