import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./sections/aboutMe";
import Resume from "./sections/resume";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";

export default function Project () {
const [currentPage, setCurrentPage] = useState('AboutMe');

const displayPage = () => {
    if (currentPage === 'AboutMe') {
        return <AboutMe />
    }
    if (currentPage === 'Resume') {
        return <Resume />
    }
    if (currentPage === 'Contact') {
        return <Contact />
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />
    }

}

const handlePageChange = (page) => setCurrentPage(page)

return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        
        {displayPage()}

        <Footer />
    </div>
)

}