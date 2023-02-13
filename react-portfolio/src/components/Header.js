import React from "react";
import Navbar from "./Navbar";

export default function Header({ currentPage, handlePageChange }) {

    return (
        <header className="header">
            <h1>Portfolio</h1>
            
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}