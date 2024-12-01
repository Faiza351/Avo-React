import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import imgh1 from '../assets/images/work-1.jpg'
import imgh2 from '../assets/images/work-2.jpg'
import imgh3 from '../assets/images/work-3.jpg'
import imgh4 from '../assets/images/work-4.jpg'
import imgh5 from '../assets/images/work-5.jpg'
import imgh6 from '../assets/images/work-6.jpg'
import person1 from '../assets/images/person_1.jpg'
import person2 from '../assets/images/person_2.jpg'
import person_3 from '../assets/images/person_3.jpg'
import imga from '../assets/images/about.jpg'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />

      <h1 className='au'>About Us</h1>
      <About />
      <div className='container con2'>
        <div className="row">
          <div className="col-sm-4 con2c1" data-aos="fade-right">
            <h3>Welcome to AVO A Personal Porfolio Web Agency</h3>
            <p style={{ color: "gray" }}>Separated they live in Bookmarksgrove right at the coast
              of the Semantics, a large language ocean. A small river named
              Duden flows by their place and supplies it with the necessary regelialia.
              It is a paradisematic country, in which roasted parts of sentences fly into
              your mouth.
            </p>
          </div>
          <div className="col-sm-4 con2c2" data-aos="fade-up">
            <img src={imga} alt="imga" className='d-block w-100' style={{ height: "44vh",boxShadow: "0 8px 20px -4px gray" }} />
          </div>
          <div className="col-sm-4 con2c3" data-aos="fade-left">
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
        <div className="row mt-3" data-aos="fade-right">
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
      {/* <div class="container px-4">
        <div class="row gx-5">
          <div class="col bg-primary">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col bg-secondary">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col bg-primary">
            <div class="p-3">Custom column padding</div>
          </div>
        </div>
      </div> */}


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

      <h1 className='tm' data-aos="fade-up">Clients Says About Us?</h1>
      <Testimonials />
      <div className="container imgbgc"data-aos="flip-left">
        <div className='imgbgdiv'>
         <h5 style={{color:"maroon"}}>Get Started</h5>
         <h3 style={{color:"white"}}>Fill in the brief and get the project estimate</h3>
         <p style={{color:"lightgrey",fontSize:"18px"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
         <button type="button" className="btn" style={{backgroundColor:"maroon",color:"white"}}>Get Started</button>
        </div>
      </div> <br />
      <Blog />
      <Footer />
      





    </>
  )
}

export default Home