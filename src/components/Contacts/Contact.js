import React from 'react';
import "./Contact.css"
import { NavLink } from 'react-router-dom';


// const bgCover = {
//     // background: `url(${bg})`,
//     backgroundColor: 'rgba(0, 0, 0, 0.80)',
//     backgroundPosition: 'center top',
//     backgroundBlendMode: 'darken, luminosity',
// }
const Contact = () => {
    return (
        <div style={{backgroundColor:'gainsboro'}}>

            <div  className="py-5 text-center mb-5">
                <h1 style={{ color: 'purple', marginBottom: '15px' }} >CONTACT US</h1>
                <p className="text-color fw-bold  fs-5"> <NavLink className="text-decoration-none text-primary" to="/">Home   /   </NavLink>Contact Us</p>
            </div>
            <div className="my-5" >
                <div className="container row gx-4 mx-auto">
                    <div className="col-lg-7 col-md-7 col-12">
                        <form className="border p-5">
                            <h1 className="text-start">Interested in <span style={{ color: 'purple' }}>discussing</span> ?</h1>
                            <p style={{ fontSize: '15px', marginBottom: '50px', color: 'gray' }} className="text-start fw-bold">You Could fill-up this form to contact with us.</p>
                            <div className="my-4">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className=" my-4">
                                <input type="text" className="form-control" placeholder="Your Address" />
                            </div>
                            <div className="my-4 ">
                                <input type="number" className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-row row my-4">
                                <div className=" col-md-8">
                                    <input type="text" placeholder="City" className="form-control" />
                                </div>
                                <div className=" col-md-4">
                                    <input type="number" placeholder="Zip Code" className="form-control" />
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea className="form-control" name="comment" id="" cols="30" rows="3" placeholder="Enter Message"></textarea>
                            </div>
                            <button type="submit" className="btn submit-btn">Sign in</button>
                        </form>
                    </div>

                    <div className="col-lg-5 col-md-5 col-12 mt-4">
                        <div style={{boxShadow: " 2px 3px 6px #00000073, -6px -6px 16px white" }} className="row my-3 py-3 rounded">
                            <div className="col-3 my-3 border-end border-2 d-flex align-items-center justify-content-center">
                                <span className="text-dark" style={{fontSize:"50px"}}><i className="fas fa-phone-square-alt fs-1 "></i></span>
                            </div>
                            <div className="col-9 ps-4 pt-2">
                                <h3 className="fw-bold text-dark text-start">Phone</h3>
                                <p className="text-start"><a className="text-decoration-none fs-5 text-dark" aria-current="page" href="tel:00123456789">00123456789</a></p>
                            </div>
                        </div>
                        <div style={{boxShadow: " 2px 3px 6px #00000073, -6px -6px 16px white" }} className="row my-3 py-3 rounded">
                            <div className="col-3 my-3 border-end border-2 d-flex align-items-center justify-content-center">
                                <span className=" text-dark" style={{fontSize:"50px"}}><i className="fas fa-envelope-square fs-1"></i></span>
                            </div>
                            <div className="col-9 ps-4 pt-2">
                                <h3 className="fw-bold text-dark text-start">Email</h3>
                                <p className="text-dark text-start fs-5">info@appendin.com</p>
                            </div>
                        </div>
                        <div style={{boxShadow: " 2px 3px 6px #00000073, -6px -6px 16px white" }} className="row my-3 py-3 rounded">
                            <div className="col-3 my-3 border-end border-2 d-flex align-items-center justify-content-center">
                                <span className="text-dark" style={{fontSize:"50px"}}><i className="fas fa-globe fs-1"></i></span>
                            </div>
                            <div className="col-9 ps-4 pt-2">
                                <h3 className="fw-bold text-dark text-start">Address</h3>
                                <p className="text-dark text-start fs-5">www.appendin.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;