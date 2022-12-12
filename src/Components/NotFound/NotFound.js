import React from "react";
import { Link } from "react-router-dom";
 import './NotFound.css'

export default function NotFound() {
    return (
        <div className="container not-found-wrapper">
        <main>
        <h2>404</h2>
            <h3 className="mb-5">Not Found</h3>
            <h4 className="mt-5 mb-5">Oops! You seem to be lost.</h4>
            <Link to='/'><button className="read-btn hero-read-more">
             back to our website
             </button></Link>
        </main>
            
        </div>
    )
}