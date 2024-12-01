import React from 'react'
import imgi1 from '../assets/images/i1.png'
import imgi2 from '../assets/images/i2.png'
import imgi3 from '../assets/images/i3.png'
import imgi4 from '../assets/images/i4.png'
import imgi5 from '../assets/images/i5.png'

function About() {
  return (
    <>
    <div className='container cabout' data-aos="fade-up">
        <div className='row'>
            <div className='col-sm-2 caboutc1'>
                <img src={imgi1} alt="imgi1" className='imgi1' />
                <div className='head6'>
                <h6>UI/UX Design</h6>
                </div>
                
              
            </div>
            <div className='col-sm-2 caboutc1'>
                <img src={imgi2} alt="imgi2"  className='imgi2' />
                <div className='head7'>
                <h6>Web Development</h6>
                </div>

            </div>
            <div className='col-sm-2 caboutc1'>
                <img src={imgi3} alt="imgi3"  className='imgi3'/>
                <div className='head6'>
                <h6>Product Design</h6>
                </div>

            </div>
            <div className='col-sm-2 caboutc1'>
                <img src={imgi4} alt="imgi4"  className='imgi4' />
                <div className='head6'>
                <h6>Mobile Apps</h6>
                </div>

            </div>
            <div className='col-sm-2 caboutc1'>
                <img src={imgi5} alt="imgi5"  className='imgi5' />
                <div className='head6'>
                <h6>SEO</h6>
                </div>
                

            </div>

        </div>

    </div>


    </>
  )
}

export default About