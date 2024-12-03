import React, { useEffect, useState } from 'react'
import About from '../components/About.jsx'
import imga from '../assets/images/about.jpg'
import './StyleAu.css'
import Footer from '../components/Footer.jsx';
import imgh7 from '../assets/images/image_1.jpg'
import imgh8 from '../assets/images/image_2.jpg'
import imgh9 from '../assets/images/image_3.jpg'
import imgh10 from '../assets/images/image_4.jpg'
import Testimonials from '../components/Testimonials.jsx';
import Navbar from '../components/Navbar.jsx';


function AboutUs() {
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
                <Navbar/>


                <div className='headerdiv1' data-aos="fade-right">
                    <a href="#" style={{ textDecoration: "none" }}><h3 style={{ color: "lightgrey" }}>Home <i className="fa-solid fa-angle-right" style={{color:"red"}}></i></h3></a>
                   <div className='aboutush3'>
                   <h3>About Us <i className="fa-solid fa-angle-right" style={{color:"red"}}></i></h3>
                   </div> 

                   <h1 className='aboutush2'>About Us</h1>
                </div>

            </div>
            <h1 className='au'>About Us</h1>
            <About />
            <div className='container con2n'>
                <div className="row">
                    <div className="col-sm-4 con2c1">
                        <h3>Welcome to AVO A Personal Porfolio Web Agency</h3>
                        <p style={{ color: "gray" }}>Separated they live in Bookmarksgrove right at the coast
                            of the Semantics, a large language ocean. A small river named
                            Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly into
                            your mouth.
                        </p>
                    </div>
                    <div className="col-sm-4 con2c2">
                        <img src={imga} alt="imga" className='d-block w-100' style={{ height: "44vh", boxShadow: "0 8px 20px -4px gray" }} />
                    </div>
                    <div className="col-sm-4 con2c3">
                        <p style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts. Separated they
                            live in Bookmarksgrove right at the coast of the Semantics, a large
                            language ocean. A small river named Duden flows by their place and supplies
                            it with the necessary regelialia. It is a paradisematic country, in which
                            roasted parts of sentences fly into your mouth.
                        </p>
                        <button type="button" className="btn btn-danger">View All Projects</button>

                    </div>
                </div>
                <div className="row mt-3" >
                    <div className="col-sm-4 conc31">
                        <p style={{ color: "red", fontSize: "48px", }}><u>01</u></p>
                        <div className="intxt">
                            <h5>Search Engine Optimization</h5>
                            <p>Far far away, behind the word mountains</p>
                        </div>
                    </div>

                    <div className="col-sm-4 conc32">
                        <p style={{ color: "red", fontSize: "48px" }}><u>02</u></p>
                        <div className="intxt">
                            <h5>Search Engine Optimization</h5>
                            <p>Far far away, behind the word mountains</p>
                        </div>
                    </div>

                    <div className="col-sm-4 conc33">
                        <p style={{ color: "red", fontSize: "48px" }}><u>03</u></p>
                        <div className="intxt">
                            <h5>Search Engine Optimization</h5>
                            <p>Far far away, behind the word mountains</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container imgbgcn">
                <div className='imgbgdiv'>
                    <h5 style={{ color: "maroon" }}>Get Started</h5>
                    <h3 style={{ color: "white" }}>Fill in the brief and get the project estimate</h3>
                    <p style={{ color: "lightgrey", fontSize: "18px" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button type="button" className="btn" style={{ backgroundColor: "maroon", color: "white" }}>Get Started</button>
                </div>
            </div>
            <div className='container-fluid blogcf1'>
                <div className="container blogc">
                    <h1 style={{ textAlign: "center" }} data-aos="fade-up">EXPERT TEAM</h1> <br />
                    <div className="row row-cols-1 row-cols-sm-4 g-4">
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                                <img src={imgh7} className="card-img-top" alt="i7" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                    
                                <img src={imgh8} className="card-img-top" alt="i8" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                               
                                <img src={imgh9} className="card-img-top" alt="i9" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                                
                                <img src={imgh10} className="card-img-top" alt="i10" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-4 g-4">
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                                
                                <img src={imgh7} className="card-img-top" alt="i7" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                                
                                <img src={imgh8} className="card-img-top" alt="i8" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                                
                                <img src={imgh9} className="card-img-top" alt="i9" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3" data-aos="fade-up">
                            <div className="card">
                                
                                <img src={imgh10} className="card-img-top" alt="i10" style={{ height: "40vh" }} />
                                <div className="card-body" style={{ marginLeft: '-6%' }}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{ color: "gray" }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='tm' data-aos="fade-up">Clients Says About Us?</h1>
            <Testimonials />
            <Footer/>

        </>
    )
}

export default AboutUs
