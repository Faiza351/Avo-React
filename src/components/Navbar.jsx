
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [navbarScrolled, setNavbarScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setNavbarScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <nav className={`navbar navbar-expand-lg topnav ${navbarScrolled ? 'navbar-scrolled' : ''} `} >
                <div className="container">
                    <Link className={`navbar-brand ${navbarScrolled ? 'scrolled-txt' : 'txt1'} `} to="/"><b>a<mark style={{ color: "red", backgroundColor: "transparent" }}>v</mark>o</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu"><b>MENU</b></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-1 mb-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-danger" aria-current="page" to="/"><b>HOME</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${navbarScrolled ? 'scrolled-txt' : 'txt'} `} to="/about-us"><b>ABOUT</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${navbarScrolled ? 'scrolled-txt' : 'txt'} `} to="/work"><b>WORK</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${navbarScrolled ? 'scrolled-txt' : 'txt'} `} to="/blog"><b>BLOG</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${navbarScrolled ? 'scrolled-txt' : 'txt'} `} to="/Contact"><b>CONTACT</b></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

           
        </>
    )
}

export default Navbar