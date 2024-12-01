import React, { useEffect, useState } from 'react'
import img1 from '../assets/images/bg_1.jpg'
import img2 from '../assets/images/bg_2.jpg'


function Header() {
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 1);
            } else counter.innerText = target;
        };
        updateCounter();
    });

    return (
        <>
            <div className='container-fluid cf1'>
                <nav className={`navbar navbar-expand-lg topnav ${navbarScrolled ? 'navbar-scrolled' : ''} `} >
                    <div className="container navcont">
                        <a className="navbar-brand nbt" href="#"><b>a<mark style={{ color: "red", backgroundColor: "transparent" }}>v</mark>o</b></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu"><b>MENU</b></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mt-1 mb-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#" style={{color:"red"}}><b>HOME</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txt" href="#" style={{color:"gray"}}><b>ABOUT</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txt" href="#" style={{color:"gray"}}><b>WORK</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txt" href="#" style={{color:"gray"}}><b>BLOG</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txt" href="#" style={{color:"gray"}}><b>CONTACT</b></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='headerdiv' data-aos="fade-right">
                    <h1 style={{ color: "white" }}>WE CREATE MODERN & MINIMAL WEBSITE</h1><br />
                    <p style={{ color: "white" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <br /><button type="button" className="btn " style={{ backgroundColor: "maroon", color: "white", padding: "2%" }}>Explore Project</button>
                </div>

                <div className="counter-container" data-aos="fade-left">
                    {/* <button type='button' style={{borderLeft:"5px solid transparent",borderRight:"5px solid maroon",borderTop:"5px solid transparent",borderBottom:"5px solid transparent",paddingLeft:"0px",paddingRight:"10px",paddingBottom:"0px",paddingTop:"0px",backgroundColor:"transparent"}} >
                    
                     </button> */}
                     <div className="counter" data-target="1200" style={{color:"white"}}></div>
                     <div className='mline'>L</div>
                    <span style={{color:"lightgrey"}}>Years of experience</span>
                </div>

                <section>
                    <a href="" className='playBtn'></a>

                </section>
            </div>
        </>
    )
}

export default Header