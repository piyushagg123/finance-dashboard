import React from 'react'
import { MdEscalator } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { IoTimer } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
const ClientSection = () => {
    return (
        <div>
            <section className='client_section'>
                <div className="client_container">
                    <h2 className='text-center text-primary'>Why Do Clients Love Us?</h2>
                    <p className='text-center mb-4'>We Serve Efficiency, Acuracy, and Precision Bundled with Productivity!</p>

                    <div className="row d-flex flex-column flex-lg-row">
                        <div className="col-12 col-lg-6 client_card">
                            <div className="client_icon" style={{ background: "#d5d5d5" }}>
                                <MdEscalator className='client_icon_img' style={{ color: "gray" }} />
                            </div>
                            <div className="client_details">
                                <h4 className='text-primary'>Scalability</h4>
                                <p>Plan Your expansions and scale our solutions to match your growing needs.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 client_card">
                            <div className="client_icon" style={{ background: "#93d2fc" }}>
                                <IoSettings className='client_icon_img' style={{ color: "#347ef1" }} />
                            </div>
                            <div className="client_details">
                                <h4 className='text-primary'>Automation</h4>
                                <p>Digitize processes, get rid of manual errors and set your resources free.</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 client_card">
                            <div className="client_icon" style={{ background: "#b4caf1" }}>
                                <HiLightBulb className='client_icon_img' style={{ color: "#0a295f" }} />
                            </div>
                            <div className="client_details">
                                <h4 className='text-primary'>Cost-effective Solution</h4>
                                <p>We deliever a competitive pricing value module, the cost-effective solution in the market.</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 client_card">
                            <div className="client_icon" style={{ background: "#c9b7fd" }}>
                                <IoNewspaperSharp className='client_icon_img' style={{ color: "#7c2ef5" }} />
                            </div>
                            <div className="client_details">
                                <h4 className='text-primary'>Paperless System</h4>
                                <p>Eliminate file storage, avoid data loss, and reduce paperwork.</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 client_card">
                            <div className="client_icon" style={{ background: "#f3b8a6" }}>
                                <TbTargetArrow className='client_icon_img' style={{ color: "#ff4108" }} />
                            </div>
                            <div className="client_details">
                                <h4 className='text-primary'>Multi Purpose Application</h4>
                                <p>One name that addresses all your accounting and GST concerns in Munim.</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 client_card">
                            <div className="client_icon" style={{ background: "#cae9a2" }}>
                                <IoTimer className='client_icon_img' style={{ color: "#608d25" }} />
                            </div>
                            <div className="client_details">
                                <h4 className='text-primary'>Real-time Access</h4>
                                <p>Share, retrieve and access your financial records at a single click.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ClientSection