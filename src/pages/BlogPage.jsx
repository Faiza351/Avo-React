import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx';
import imgh7 from '../assets/images/image_1.jpg'
import imgh8 from '../assets/images/image_2.jpg'
import imgh9 from '../assets/images/image_3.jpg'
import imgh10 from '../assets/images/image_4.jpg'
import Footer from '../components/Footer.jsx';


function BlogPage() {
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
                        <h3>Blog <i className="fa-solid fa-angle-right" style={{ color: "red" }}></i></h3>
                    </div>

                    <h1 className='aboutush2'>Blog</h1>
                </div>
            </div>
            <div className='container-fluid blogcf1'>
                <div className="container blogc">
                    {/* <h1 style={{ textAlign: "center" }} data-aos="fade-up">Blog</h1> <br /> */}
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
            <Footer />

        </>
    )
}

export default BlogPage