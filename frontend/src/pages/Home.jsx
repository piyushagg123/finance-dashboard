// import { lazy } from 'react';
import '../css/Home.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import HeroSection from '../components/Home/HeroSection';
import MegaFeatureSection from '../components/Home/MegaFeatureSection';
import TechFeatureSection from '../components/Home/TechFeatureSection';
import ClientSection from '../components/Home/ClientSection';
import PricingSection from '../components/Home/PricingSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import getBaseUrl from '../services/connectionString';
// const Navbar = lazy(() => import('../components/Navbar'));
// const HeroSection = lazy(() => import('../components/Home/HeroSection'));
// const MegaFeatureSection = lazy(() => import('../components/Home/MegaFeatureSection'));
// const TechFeatureSection = lazy(() => import('../components/Home/TechFeatureSection'));
// const ClientSection = lazy(() => import('../components/Home/ClientSection'));
// const PricingSection = lazy(() => import('../components/Home/PricingSection'));
// const Footer = lazy(() => import('../components/Footer'));


const Home = () => {
    const [loginNumber, setLoginNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [otpRequested, setOtpRequested] = useState(false);
    const navigate = useNavigate();
    const myButtonRef = React.createRef();

    const handleSubmit = (e, validateOtp) => {
        e.preventDefault();

        const phoneRegex = new RegExp(/^[0-9\b]+$/);
        if (loginNumber === '') {
            toast.error('Phone number is required!');
        } else if (!phoneRegex.test(loginNumber)) {
            toast.error('Invalid Number');
        } else if (loginNumber.length !== 10) {
            toast.error("Please enter 10 digits mobile number")
        } else {
            // Successfully validated phone number
            setOtpRequested(true); // Set state to indicate OTP is requested
            if (validateOtp) {
                axios.defaults.withCredentials = true;
                axios
                    .post(getBaseUrl() + `api/users/login`, { loginNumber: loginNumber, otp: otp }, {
                        withCredentials: true,
                    })
                    .then((response) => {
                        if (response.data.result) {
                            toast.success(response.data.message)
                            myButtonRef.current.click();
                            navigate('/dashboard/full-report')
                        }
                        else {
                            toast.error(response.data.message)
                        }
                        //console.log(response.data);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            }
        }
    };

    return (
        <>
            <div className='d-flex flex-column w-100'>
                <Navbar />

                {/* Home Container Start ============================= */}
                <HeroSection loginNumber={loginNumber} setLoginNumber={setLoginNumber} />
                {/* Home Container End ============================= */}


                {/* Feature Section Start ============================= */}
                <MegaFeatureSection />
                {/* Feature Section End ============================= */}


                {/* Tech Feature Section Start ============================= */}
                <TechFeatureSection />
                {/* Tech Feature Section End ============================= */}


                {/* Client Section Start ============================= */}
                <ClientSection />
                {/* Client Section End ============================= */}


                {/* Pricing Section Start ============================= */}
                <PricingSection />
                {/* Pricing Section End ============================= */}


                {/* Modal Start */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: "99991" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header modal_header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="khatabook_modal_icon">
                                    <img src={logo} className='popup_logo' alt='xerobook' />
                                </div>
                                <form>
                                    <h1 className="modal-title fs-5 text-center mb-3" id="exampleModalLabel">Welcome to Xerobook</h1>
                                    <div className="mb-3">
                                        <label htmlFor="number" className="form-label">Enter Phone Number</label>
                                        <div className='modal_btn_number input_text'>
                                            <button>+91</button><input type="number" inputMode='numeric' value={loginNumber} className="form-control" id="number" onChange={e => setLoginNumber(e.target.value)} placeholder='Enter Your Phone Number' />
                                        </div>
                                    </div>
                                    {otpRequested ? (
                                        <>
                                            <div className="mb-3">
                                                <label htmlFor="otp" className="form-label">Enter OTP</label>
                                                <input
                                                    type="number"
                                                    inputMode='numeric'
                                                    className="form-control"
                                                    id="otp"
                                                    placeholder='Enter OTP'
                                                    value={otp}
                                                    onChange={e => setOtp(e.target.value)}
                                                // Add onChange and value props as needed
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                className="d-flex w-100 justify-content-center py-2 btn btn-danger"
                                                onClick={e => handleSubmit(e, true)}
                                            >
                                                Login
                                            </button>
                                            <button
                                                type="button"
                                                ref={myButtonRef}
                                                data-bs-dismiss="modal"
                                                style={{ display: 'none' }}
                                            >
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            type="button"
                                            className="d-flex w-100 justify-content-center py-2 btn btn-info"
                                            onClick={e => handleSubmit(e, false)}
                                            style={{ background: "#1877f2", borderColor: "#1877f2" }}
                                        >
                                            Get OTP
                                        </button>
                                    )}

                                    <div className='modal_policy'>
                                        <p className='' text-center>By proceeding, you agree to our <Link>Terms of Use</Link> and <Link>Privacy Policy</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal End */}

                <Footer />
            </div>
        </>
    )
}

export default Home