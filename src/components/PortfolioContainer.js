import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

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
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    useEffect(() => {
        setCurrentPage('AboutMe', 'Portfolio');
    }, []);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/> 
            {renderPage()}
            <Footer/>
        </div>
    )
}