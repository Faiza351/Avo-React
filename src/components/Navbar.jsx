
import React, {useEffect, useState} from 'react'

function Navbar() {
    const [navbarScrolled, setNavbarScrolled] =  useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setNavbarScrolled(window.scrollY>50);
        };
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    }, []);
    return (
        <>
            <nav className={`navbar navbar-expand-lg topnav ${navbarScrolled ? 'navbar-scrolled' :''} `} >
                <div className="container">
                    <a className="navbar-brand text-white" href="#"><b>a<mark style={{color:"red",backgroundColor:"transparent"}}>v</mark>o</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu"><b>MENU</b></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-1 mb-0">
                            <li className="nav-item">
                                <a className="nav-link active text-danger" aria-current="page" href="#"><b>HOME</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt" href="#"><b>ABOUT</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt" href="#"><b>WORK</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt" href="#"><b>BLOG</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link txt" href="#"><b>CONTACT</b></a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar