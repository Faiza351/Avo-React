import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import imgh1 from '../assets/images/work-1.jpg'
import imgh2 from '../assets/images/work-2.jpg'
import imgh3 from '../assets/images/work-3.jpg'
import imgh4 from '../assets/images/work-4.jpg'
import imgh5 from '../assets/images/work-5.jpg'
import imgh6 from '../assets/images/work-6.jpg'
import person1 from '../assets/images/person_1.jpg'
import person2 from '../assets/images/person_2.jpg'
import person_3 from '../assets/images/person_3.jpg'
import Footer from '../components/Footer';

function Work() {
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
                        <h3>Work <i className="fa-solid fa-angle-right" style={{ color: "red" }}></i></h3>
                    </div>

                    <h1 className='aboutush2'>Work</h1>
                </div>




            </div>
            <div className='container cnew'>
        <br /><br /><br />
        <h1 style={{ textAlign: "center", fontSize: "46px" }} data-aos="fade-up">Our Works</h1>
        <br /><br /><br />
        {/* row 1 */}
        <div className='row'>
          <div className='col-sm-6' data-aos="fade-right">
            <img src={imgh1} alt="work1" className='imgh1' />
          </div>
          <div className='col-sm-6' data-aos="fade-left">
            <div className='textc1'>
              <h6>Web Design</h6>
              <h2>Cassette tape</h2>
              <p style={{ color: "gray", fontSize: "18px", marginTop: "4%" }}>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
              <div className='outerdiv'>
                <img src={person1} alt="p1" className='rounded-circle idi1' />
                <div className='innerdiv'>
                  <h6>Jamie Jonson</h6>
                  <p style={{ color: "gray" }}>a v o . c o m</p>
                </div>
              </div><br />
              <button type="button" className="btn btn-outline-secondary">VIEW PORTFOLIO</button>
            </div>

          </div>
        </div>

        {/* row 2 */}
        <div className='row'>
          <div className='col-sm-6' data-aos="fade-right">
            <div className='textc2'>
              <h6>Application</h6>
              <h2>Miniwall Clock</h2>
              <p style={{ color: "gray", fontSize: "18px", marginTop: "4%" }}>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
              <div className='outerdiv2'>
                <img src={person2} alt="p2" className='rounded-circle idi2' />
                <div className='innerdiv2'>
                  <h6>Jamie Jonson</h6>
                  <p style={{ color: "gray" }}>a v o . c o m</p>
                </div>
              </div><br />
              <button type="button" className="btn btn-outline-secondary">VIEW PORTFOLIO</button>
            </div>
          </div>
          <div className='col-sm-6' data-aos="fade-left">
            <img src={imgh2} alt="work2" className='imgh2' />

          </div>
        </div>

        {/* row 3 */}

        <div className='row'>
          <div className='col-sm-6' data-aos="fade-right">
            <img src={imgh3} alt="work3" className='imgh3' />
          </div>
          <div className='col-sm-6' data-aos="fade-left">
            <div className='textc3'>
              <h6>UI/UX Design</h6>
              <h2>Avo Portfolio Agency</h2>
              <p style={{ color: "gray", fontSize: "18px", marginTop: "4%" }}>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
              <div className='outerdiv3'>
                <img src={person_3} alt="p3" className='rounded-circle idi3' />
                <div className='innerdiv3'>
                  <h6>Jamie Jonson</h6>
                  <p style={{ color: "gray" }}>a v o . c o m</p>
                </div>
              </div><br />
              <button type="button" className="btn btn-outline-secondary">VIEW PORTFOLIO</button>
            </div>

          </div>

        </div>

        {/* row 4 */}
        <div className='row'>
          <div className='col-sm-6' data-aos="fade-right">
            <div className='textc4'>
              <h6>Web Development</h6>
              <h2>Hand Writing</h2>
              <p style={{ color: "gray", fontSize: "18px", marginTop: "4%" }}>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
              <div className='outerdiv4'>
                <img src={person2} alt="p4" className='rounded-circle idi4' />
                <div className='innerdiv4'>
                  <h6>Jamie Jonson</h6>
                  <p style={{ color: "gray" }}>a v o . c o m</p>
                </div>
              </div><br />
              <button type="button" className="btn btn-outline-secondary">VIEW PORTFOLIO</button>
            </div>

          </div>
          <div className='col-sm-6' data-aos="fade-left">
            <img src={imgh4} alt="work4" className='imgh4' />

          </div>

        </div>

        {/* row 5 */}
        <div className='row'>
          <div className='col-sm-6' data-aos="fade-right">
            <img src={imgh5} alt="work5" className='imgh5' />

          </div>
          <div className='col-sm-6' data-aos="fade-left">
            <div className='textc5'>
              <h6>UI/UX Design</h6>
              <h2>Avo Portfolio Agency</h2>
              <p style={{ color: "gray", fontSize: "18px", marginTop: "4%" }}>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
              <div className='outerdiv5'>
                <img src={person_3} alt="p5" className='rounded-circle idi5' />
                <div className='innerdiv5'>
                  <h6>Jamie Jonson</h6>
                  <p style={{ color: "gray" }}>a v o . c o m</p>
                </div>
              </div><br />
              <button type="button" className="btn btn-outline-secondary">VIEW PORTFOLIO</button>
            </div>

          </div>

        </div>

        {/* row 6 */}
        <div className='row'>
          <div className='col-sm-6' data-aos="fade-right">
            <div className='textc6'>
              <h6>Web Development</h6>
              <h2>Spiral</h2>
              <p style={{ color: "gray", fontSize: "18px", marginTop: "4%" }}>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
              <div className='outerdiv6'>
                <img src={person2} alt="p2" className='rounded-circle idi6' />
                <div className='innerdiv6'>
                  <h6>Jamie Jonson</h6>
                  <p style={{ color: "gray" }}>a v o . c o m</p>
                </div>
              </div><br />
              <button type="button" className="btn btn-outline-secondary">VIEW PORTFOLIO</button>
            </div>
          </div>
          <div className='col-sm-6' data-aos="fade-left">
            <img src={imgh6} alt="work6" className='imgh6' />
          </div>

        </div>
      </div>

      <Footer/>

        </>
    )
}

export default Work