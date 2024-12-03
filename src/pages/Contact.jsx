import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Contact() {
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        // Aos.init();
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
                <Navbar />

                <div className='headerdiv1' data-aos="fade-right">
                    <a href="#" style={{ textDecoration: "none" }}><h3 style={{ color: "lightgrey" }}>Home <i className="fa-solid fa-angle-right" style={{ color: "red" }}></i></h3></a>
                    <div className='aboutush3'>
                        <h3>Contact <i className="fa-solid fa-angle-right" style={{ color: "red" }}></i></h3>
                    </div>

                    <h1 className='aboutush2'>Contact</h1>
                </div>
            </div>
            <div className="centxtcontdiv">
                <h5 style={{color:"red"}}>Contact Us</h5>
                <h1>HAVE A PROJECT?</h1>
                <p style={{color:"gray",fontSize:"18px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className='container contactCon'>
                <div className="row">
                    <div className="col-sm-7 formcol1">

                        <form>
                            <div className="formclass">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div> <br />
                            <div className="formclass">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div> <br />
                            <div className="form-check formclass ">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> <br />
                            <button type="submit" className="btn" style={{backgroundColor:"red",color:"white"}}>Submit</button>
                        </form>
                    </div>
                    <div className="col-sm-5 formcol2 ">
                        <div className="row r1form">
                            <div className="col-sm-2 ">
                            <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="col-sm-10 " >
                            <h4>Address</h4>
                            <p style={{color:"gray"}}>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                        <div className="row r2form">
                            <div className="col-sm-2 ">
                            <i className="fa-solid fa-phone phoneicon2"></i>
                            </div>
                            <div className="col-sm-10" >
                            <h4>Phone</h4>
                            <p style={{color:"red"}}>+ 1235 2355 98</p>
                            </div>
                        </div>
                        <div className="row  r3form">
                            <div className="col-sm-2 ">
                            <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="col-sm-10" >
                            <h4>World Map</h4>
                            <p style={{color:"red"}}>yoursite.com</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        
        </>
    )
}

export default Contact