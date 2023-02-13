import React from "react"

export default function Navbar({ currentPage, handlePageChange }) {

    return (
        <nav>
            <ul>
                <li>
                    <a href="#aboutMe" onClick={() => handlePageChange('aboutMe')}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => handlePageChange('portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={() => handlePageChange('resume')}>
                        Resume
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => handlePageChange('contact')}>
                        Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    );
}