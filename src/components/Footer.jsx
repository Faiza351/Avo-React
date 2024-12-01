import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-fluid footercf">
        {/* <div className='container footcon'> */}
        <div className="row"> 
            <div className="col-sm-2 footcol1" data-aos="fade-up"> 
             <h3 style={{color:"white"}}>avo</h3> <br />
             <p style={{color:"lightgrey",fontSize:"18px"}}> Far far away, behind the word mountains, far from the countries.</p>
              <br /><div className="icons">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="col-sm-2 footcol2" data-aos="fade-up">
            <h4 style={{color:"white"}}>Community</h4> <br />
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Projects</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Team</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Reviews</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>FAQs</p>

            </div>
            <div className="col-sm-2 footcol3" data-aos="fade-up">
            <h4 style={{color:"white"}}>About Us</h4> <br />
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Our Story</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Meet the team</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Careers</p>
            </div>
            <div className="col-sm-2 footcol4" data-aos="fade-up">
            <h4 style={{color:"white"}}>Company</h4> <br />
            <i className="fa-solid fa-angle-right"></i><p className='footext'>About Us</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Press</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Contact</p>
            <i className="fa-solid fa-angle-right"></i><p className='footext'>Careers</p>
            </div>
            <div className="col-sm-2 footcol5" data-aos="fade-up">
            <h4 style={{color:"white"}}>Have a Questions?</h4> <br />
            <i className="fa-solid fa-map" style={{color:"lightgrey"}}></i><p className='footext1'>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <i className="fa-solid fa-phone" style={{color:"lightgrey"}}></i><p className='footext1'>+2 392 3929 210</p>
            <i className="fa-solid fa-envelope" style={{color:"lightgrey"}}></i><p className='footext1'>info@yourdomain.com</p>

            </div>
        </div>
        {/* </div> */}
        
        <p className="fcpr" data-aos="flip-left">Copyright © 2024 All rights reserved | This template
             is made with <i className="fa-solid fa-heart"></i> by <a href="#" className="fcl">Colorlib</a></p>
    </div>
    </>
  )
}

export default Footer