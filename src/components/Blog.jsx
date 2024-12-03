import React from 'react'
import imgh7 from '../assets/images/image_1.jpg'
import imgh8 from '../assets/images/image_2.jpg'
import imgh9 from '../assets/images/image_3.jpg'
import imgh10 from '../assets/images/image_4.jpg'

function Blog() {
    return (
        <>
        <div className='container-fluid blogcf'>

        
            <div className="container blogc">
                <h1 style={{ textAlign: "center" }} data-aos="fade-up">Recent Blog</h1> <br />
                <div className="row row-cols-1 row-cols-sm-4 g-4">
                    <div className="col-sm-3" data-aos="fade-up">
                        <div className="card">
                               <h5>Amplify your blockchain team</h5>
                               <img src={imgh7} className="card-img-top" alt="i7" style={{height:"40vh"}} />
                                <div className="card-body" style={{marginLeft:'-6%'}}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{color:"gray"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-3" data-aos="fade-up">
                    <div className="card">
                               <h5>Amplify your blockchain team</h5>
                               <img src={imgh8} className="card-img-top" alt="i8" style={{height:"40vh"}} />
                                <div className="card-body" style={{marginLeft:'-6%'}}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{color:"gray"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-3" data-aos="fade-up">
                    <div className="card">
                               <h5>Amplify your blockchain team</h5>
                               <img src={imgh9} className="card-img-top" alt="i9" style={{height:"40vh"}} />
                                <div className="card-body" style={{marginLeft:'-6%'}}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{color:"gray"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-3" data-aos="fade-up">
                    <div className="card">
                               <h5>Amplify your blockchain team</h5>
                               <img src={imgh10} className="card-img-top" alt="i10" style={{height:"40vh"}} />
                                <div className="card-body" style={{marginLeft:'-6%'}}>
                                    <h6 className="card-title">June 01, 2020 Admin <i className="fa-solid fa-comment"></i> 3</h6>
                                    <p className="card-text" style={{color:"gray"}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Blog