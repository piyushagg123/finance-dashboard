import React from 'react'
import { Link } from 'react-router-dom'
import { PiSealCheckFill } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { RiBillLine } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";

const PricingSection = () => {
    return (
        <div>
            <section className='pricing_container'>
                <div className="pricing_boxes">
                    <div className="pricing_card">
                        <div className="pricing_mini_head">
                            <h4>Standard</h4>
                        </div>

                        <div className='pricing_text'>
                            <div className="pricing_para">
                                <p>Begin your journey with our basic plan for a strong and professional start</p>
                            </div>

                            <div className="pricing_price">
                                &#8377; <span>899</span>
                            </div>

                            <div className="pricing_per_plan">
                                <p>Per Organization/Month</p>
                            </div>
                        </div>


                        <div className="pricing_includes">
                            <h4>Includes</h4>

                            <p><span><CiUser /></span> Invite 3 users</p>
                            <p><span><MdOutlineCancel /></span> 1 GSTIN <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><LiaFileInvoiceSolid /></span> 5000 Invoices <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><RiBillLine /></span> 5000 Bills/Expenses <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><CiChat1 /></span> Email Support <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                        </div>

                        <div className="trial_btn">
                            <Link to='/' className='start_btn'>Start my free trial</Link>
                            <Link to='/' className='compare_btn'>+ Add to Compare</Link>
                        </div>

                        <hr />

                        <div className="pricing_points">
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> e-Invoicing</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Transaction Locking</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> SMS Notification</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Bulk Updates - Accounts</p>
                        </div>

                    </div>


                    <div className="pricing_card">
                        <div className="pricing_mini_head">
                            <h4>Professional</h4>
                        </div>

                        <div className='pricing_text'>
                            <div className="pricing_para">
                                <p>For users desiring optimal accounting and business management capablities</p>
                            </div>

                            <div className="pricing_price">
                                &#8377; <span>1799</span>
                            </div>

                            <div className="pricing_per_plan">
                                <p>Per Organization/Month</p>
                            </div>
                        </div>


                        <div className="pricing_includes">
                            <h4>Includes</h4>

                            <p><span><CiUser /></span> Invite 5 users</p>
                            <p><span><MdOutlineCancel /></span> 2 GSTINs <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><LiaFileInvoiceSolid /></span> 10,000 Invoices <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><RiBillLine /></span> 10,000 Bills/Expenses <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><CiChat1 /></span> Email and Voice Support <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                        </div>

                        <div className="trial_btn">
                            <Link to='/' className='start_btn'>Start my free trial</Link>
                            <Link to='/' className='compare_btn'>+ Add to Compare</Link>
                        </div>

                        <hr />

                        <div className="pricing_points">
                            <b>Everything in the standard Plan +</b>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Multi-currency Contacts</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Currency Adjustments</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Custom Roles</p>
                        </div>

                    </div>



                    <div className="pricing_card">
                        <div className="pricing_mini_head">
                            <h4>Premium</h4>
                        </div>

                        <div className='pricing_text'>
                            <div className="pricing_para">
                                <p>Ideal for users who seek customization, automation, and collaborative accounting</p>
                            </div>

                            <div className="pricing_price">
                                &#8377; <span>3599</span>
                            </div>

                            <div className="pricing_per_plan">
                                <p>Per Organization/Month</p>
                            </div>
                        </div>


                        <div className="pricing_includes">
                            <h4>Includes</h4>

                            <p><span><CiUser /></span> Invite 10 users</p>
                            <p><span><MdOutlineCancel /></span> 3 GSTINs <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><LiaFileInvoiceSolid /></span> 25,000 Invoices <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><RiBillLine /></span> 25,000 Bills/Expenses <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><AiOutlineFileAdd /></span> Payroll (10 employees) <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                            <p><span><CiChat1 /></span> Email, Chat, and Voice Support <span><BsInfoCircle style={{ fontSize: "12px" }} /></span></p>
                        </div>

                        <div className="trial_btn">
                            <Link to='/' className='start_btn'>Start my free trial</Link>
                            <Link to='/' className='compare_btn'>+ Add to Compare</Link>
                        </div>

                        <hr />

                        <div className="pricing_points">
                            <b>Everything in the standard Plan +</b>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Vendor Portal</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Cash Flow Forecasting</p>
                            <p><span><PiSealCheckFill style={{ color: "#1877f2" }} /></span> Custom Button and Links</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PricingSection