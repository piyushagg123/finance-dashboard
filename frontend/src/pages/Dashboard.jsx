// import React, { useEffect, useState } from "react";
import { TfiPencilAlt } from "react-icons/tfi";
import { BiUserVoice } from "react-icons/bi";
import { FaKeyboard } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import { BsDatabaseCheck } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TbPigMoney } from "react-icons/tb";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { BsCashCoin } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { FaReceipt } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import "../css/Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getBaseUrl from "../services/connectionString";
import Calculator from "../components/Calculator/Calculator";
import TodoList from "../components/Todo/TodoList";
import { useEffect, useState } from "react";

const currYear = new Date().getFullYear();
const prevYear = new Date().getFullYear() - 1;
const showYear = `${currYear} - ${prevYear}`;

const Dashboard = () => {
  const [year, setYear] = useState(showYear);
  const navigate = useNavigate();

  useEffect(() => {
    //set JWT token here
    axios.defaults.withCredentials = true;
      axios
        .get(getBaseUrl() + "api/users/verifyToken")
        .then((response) => {
          if (response.data.result == false) {
            navigate("/");
          }
        })
        .catch((error) => {
          navigate("/");
        })
  }, []);

  return (
    <>
      <div className="dash_container">
        {/* Mini Navbar Start */}
        <section className="mini_nav_box">
          {/* <div className="year_picker">
          <select name="" id="" onChange={() => setYear()}>
            <option value="" selected>
              {year}
            </option>
            <option value="" selected>
              2024-25
            </option>
            <option value="" selected>
              2025-26
            </option>
          </select>
          <TfiPencilAlt />
        </div> */}

          {/* <div className="company_picker">
          <select name="" id="">
            <option value="" selected>
              abc company - abc
            </option>
            <option value="">Astrology - abc</option>
            <option value="">Xerobbok - abc</option>
          </select>
        </div> */}

          {/* <div className="but_now_btn">
          <p>367 days remaining</p>
          <button className="btn btn-info">Buy Now</button>
        </div> */}
        </section>
        {/* Mini Navbar End */}

        <hr className="hr" />

        {/* Dashboard Start */}
        <section className="dash_section">
          {/* <div className="container"> */}
          <div className="row dashboard_main_data">
            <div className="col-12 col-lg-8">
              <div className="row growth_cards">
                <div className="col-12">
                  <div className="mt-4 growth_head">
                    <h4>Growth Pulses</h4>
                    {/* <select name="" id="">
                      <option value="">Last 7 days</option>
                      <option value="">Last 1 weeks</option>
                    </select> */}
                  </div>
                  <div className="row py-4">
                    <div className="col-12 col-sm-6 col-md-4 mt-2 mt-sm-0">
                      <div
                        className="growth_card"
                        style={{ background: "#E0F9FD" }}
                      >
                        <div className="growth_details">
                          <div
                            className="growth_icon"
                            style={{ background: "#08CDE8" }}
                          >
                            <GiTakeMyMoney />
                          </div>
                          <div className="growth_price">$0.00</div>
                        </div>
                        <div className="growth_text">
                          <p>Total Income</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mt-2 mt-sm-0">
                      <div
                        className="growth_card"
                        style={{ background: "#FBEBEB" }}
                      >
                        <div className="growth_details">
                          <div
                            className="growth_icon"
                            style={{ background: "#EA5255" }}
                          >
                            <IoIosPaper />
                          </div>
                          <div className="growth_price">$0.00</div>
                        </div>
                        <div className="growth_text">
                          <p>Total Expenses</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-2 mt-md-0">
                      <div className="growth_card">
                        <div className="growth_details">
                          <div
                            className="growth_icon"
                            style={{ background: "#29C770" }}
                          >
                            <BsDatabaseFillCheck />
                          </div>
                          <div className="growth_price">$0.00</div>
                        </div>
                        <div className="growth_text">
                          <p>Net Profit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3 revenue_cards">
                <div className="col-12 pb-2">
                  <div className="mt-4 growth_head">
                    <h4>Revenu Projections</h4>

                    {/* <div className="revenu_data">
                      <p>Compared to 17 Mar - 23 MAr 2024</p>
                      <select name="" id="">
                        <option value="">Last 7 days</option>
                        <option value="">Last 1 weeks</option>
                      </select>
                    </div> */}
                  </div>

                  <div className="row py-2">
                    <div className="col-12 col-sm-6 col-md-4 mt-2 mt-sm-0">
                      <div className="revenu_card">
                        <div className="revenu_details">
                          <div
                            className="revenu_icon"
                            style={{ background: "#E3F7EE" }}
                          >
                            <IoIosArrowUp style={{ color: "#29c770" }} />
                          </div>
                          <div className="growth_price">$0.00</div>
                        </div>
                        <div className="revenu_text">
                          <p className="revenu_percent">100%</p>
                          <p>Total Receivable Amount</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mt-2 mt-sm-0">
                      <div className="revenu_card">
                        <div className="revenu_details">
                          <div
                            className="revenu_icon"
                            style={{ background: "#E3F7EE" }}
                          >
                            <IoIosArrowUp style={{ color: "#29c770" }} />
                          </div>
                          <div className="growth_price">$0.00</div>
                        </div>
                        <div className="revenu_text">
                          <p className="revenu_percent">100%</p>
                          <p>Total Payable Amount</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 mt-2 mt-md-0">
                      <div className="revenu_card">
                        <div className="revenu_details">
                          <div
                            className="revenu_icon"
                            style={{ background: "#E2EEFD" }}
                          >
                            <BsClockHistory style={{ color: "#326dc3" }} />
                          </div>
                          <div className="growth_price">$0.00</div>
                        </div>
                        <div className="revenu_text">
                          <p className="revenu_percent">100%</p>
                          <p>Long Term Pending Receipts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3 inflow_cards">
                <div className="col-12 pb-2">
                  <div className="mt-4 growth_head">
                    <h4>Revenu Inflow</h4>

                    {/* <select name="" id="">
                      <option value="">Last 7 days</option>
                      <option value="">Last 1 weeks</option>
                    </select> */}
                  </div>

                  <div className="row py-2">
                    <div className="col-md-6 col-12 my-2">
                      <div className="inflow_card">
                        <div
                          className="inflow_icon"
                          style={{ background: "#9EE8F4" }}
                        >
                          <BsDatabaseCheck style={{ color: "#fff" }} />
                        </div>
                        <div className="inflow_text">
                          <p style={{ color: "#0ACDE2", fontSize: "20px" }}>
                            $0.00
                          </p>
                          <p>Total Cash Collected</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 my-2">
                      <div className="inflow_card">
                        <div
                          className="inflow_icon"
                          style={{ background: "#F7ACAA" }}
                        >
                          <TbPigMoney style={{ color: "#fff" }} />
                        </div>
                        <div className="inflow_text">
                          <p style={{ color: "#E65456", fontSize: "20px" }}>
                            $0.00
                          </p>
                          <p>Total Collection In Bank</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 my-2">
                      <div className="inflow_card">
                        <div
                          className="inflow_icon"
                          style={{ background: "#B8B3F5" }}
                        >
                          <HiOutlineBanknotes style={{ color: "#fff" }} />
                        </div>
                        <div className="inflow_text">
                          <p style={{ color: "#837cea", fontSize: "20px" }}>
                            $0.00
                          </p>
                          <p>Unavoidable GST Payables</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 my-2">
                      <div className="inflow_card">
                        <div
                          className="inflow_icon"
                          style={{ background: "#A2E3B8" }}
                        >
                          <BsCashCoin style={{ color: "#fff" }} />
                        </div>
                        <div className="inflow_text">
                          <p style={{ color: "#30C36C", fontSize: "20px" }}>
                            $0.00
                          </p>
                          <p>Total Cash Balance (As on)</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 my-2">
                      <div className="inflow_card">
                        <div
                          className="inflow_icon"
                          style={{ background: "#95B9F4" }}
                        >
                          <AiFillBank style={{ color: "#fff" }} />
                        </div>
                        <div className="inflow_text">
                          <p style={{ color: "#1E71E3", fontSize: "20px" }}>
                            $0.00
                          </p>
                          <p>Total Bank Balance (As on)</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 my-2">
                      <div className="inflow_card">
                        <div
                          className="inflow_icon"
                          style={{ background: "#FDD0A2" }}
                        >
                          <FaReceipt style={{ color: "#fff" }} />
                        </div>
                        <div className="inflow_text">
                          <p style={{ color: "#FCA044", fontSize: "20px" }}>
                            $0.00
                          </p>
                          <p>Unavoidable Other Tax Payables</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 mt-2 mt-lg-0">
              <div className="row setup_div">
                <div className="setup_details">
                  <div className="col-12">
                    {/* <h4 className="mt-4">Setup Guide</h4>
                  <p>Get started by completing the setup tasks below</p> */}

                    {/*<div className="row">
                    <div className="col-12">
                      <div className="guide_list">
                        <div className="form-group">
                          <input type="checkbox" name="" id="" />
                          <p>1. Update Statuory Information</p>
                        </div>
                        <hr />
                        <div className="form-group">
                          <input type="checkbox" name="" id="" />
                          <p>2. Import Opening Data</p>
                        </div>
                        <hr />
                        <div className="form-group">
                          <input type="checkbox" name="" id="" />
                          <p>3. Account Creation</p>
                        </div>
                        <hr />
                        <div className="form-group">
                          <input type="checkbox" name="" id="" />
                          <p>4. Item Creation</p>
                        </div>
                        <hr />
                        <div className="form-group">
                          <input type="checkbox" name="" id="" />
                          <p>5. Configure invoice</p>
                        </div>
                      </div>

                      <div className="progress_setup">
                        <progress
                          id="file"
                          value="32"
                          max="100"
                          className="form-control"
                        >
                          {" "}
                          32%{" "}
                        </progress>
                        <p className="text-center">
                          Setup in progress <strong>0 out of 5</strong> takes
                          have been completed.
                        </p>
                        <hr />
                      </div>

                      <div className="col-12">
                        <h4>Contact Support</h4>
                        <p>
                          We're always happy to help! Contact us anytime, and
                          we'll get back to you soon.
                        </p>

                        <div className="row py-2">
                          <div className="col-6 my-2">
                            <div className="support_card">
                              <SlCalender style={{ color: "#2771CA" }} />
                              <p>Book Meeting</p>
                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="support_card">
                              <IoChatbubbleOutline
                                style={{ color: "#6F6D77" }}
                              />
                              <p>Live Chat</p>
                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="support_card">
                              <AiOutlineMail style={{ color: "#6D6A79" }} />
                              <p>Email Us</p>
                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="support_card">
                              <FiYoutube style={{ color: "#F30405" }} />
                              <p>Video Tutorial</p>
                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="support_card">
                              <FaWhatsapp style={{ color: "#62D68F" }} />
                              <p>Whatsapp</p>
                            </div>
                          </div>

                          <div className="col-6 my-2">
                            <div className="support_card">
                              <BiHelpCircle style={{ color: "#6E6C77" }} />
                              <p>Help</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                    <Calculator />

                    <div className="row">
                      <div className="col-12">
                        <div className="guide_list">
                          <TodoList />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* Dashboard End */}
      </div>
    </>
  );
};

export default Dashboard;
