import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/Sidebar.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import axios from "axios";
import getBaseUrl from "../services/connectionString";

const Sidebar = ({
  mobileHandleToggle,
  dropdown,
  sidebarToggle,
  handleDropdownClick,
}) => {
  const [login, setLogin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //set JWT token here
    axios.defaults.withCredentials = true;
    axios
      .get(getBaseUrl() + "api/users/verifyToken")
      .then((response) => {
        if (response.data.result == false) {
          navigate("/");
        } else {
          setLogin(response.data.data);
        }
      })
      .catch((error) => {
        navigate("/");
      });
  }, []);

  return (
    <div>
      <div
        className={sidebarToggle ? "sidebar_div" : "sidebar_div toggle_sidebar"}
      >
        {/* <button className='menu_icon_btn' onClick={handleToggle} >{sidebarToggle ? <FiMenu /> : <IoClose />}</button> */}
        <div className="sidebar_data">
          <div className="sidebar_header">
            <Link className="logo" to="/">
              <p className="logo_name">Xerobook</p>
              <div className="logo_badge">
                <svg
                  width="42"
                  height="22"
                  viewBox="0 0 42 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.836182"
                    width="41"
                    height="22"
                    rx="11"
                    fill="#FAC515"
                  ></rect>
                  <path
                    d="M9.5892 7.40625V6.27273H16.3435V7.40625H13.6205V15H12.308V7.40625H9.5892ZM17.054 15V8.45455H18.2856V9.49432H18.3538C18.4731 9.14205 18.6833 8.86506 18.9844 8.66335C19.2884 8.45881 19.6322 8.35653 20.0157 8.35653C20.0952 8.35653 20.189 8.35937 20.2969 8.36506C20.4077 8.37074 20.4944 8.37784 20.5569 8.38636V9.60511C20.5057 9.59091 20.4148 9.57528 20.2842 9.55824C20.1535 9.53835 20.0228 9.52841 19.8921 9.52841C19.591 9.52841 19.3225 9.59233 19.0867 9.72017C18.8538 9.84517 18.6691 10.0199 18.5327 10.2443C18.3964 10.4659 18.3282 10.7187 18.3282 11.0028V15H17.054ZM21.6595 15V8.45455H22.9337V15H21.6595ZM22.303 7.4446C22.0814 7.4446 21.891 7.37074 21.732 7.22301C21.5757 7.07244 21.4976 6.89347 21.4976 6.68608C21.4976 6.47585 21.5757 6.29687 21.732 6.14915C21.891 5.99858 22.0814 5.9233 22.303 5.9233C22.5246 5.9233 22.7135 5.99858 22.8697 6.14915C23.0288 6.29687 23.1084 6.47585 23.1084 6.68608C23.1084 6.89347 23.0288 7.07244 22.8697 7.22301C22.7135 7.37074 22.5246 7.4446 22.303 7.4446ZM26.5526 15.1449C26.1379 15.1449 25.7629 15.0682 25.4276 14.9148C25.0924 14.7585 24.8268 14.5327 24.6307 14.2372C24.4376 13.9418 24.341 13.5795 24.341 13.1506C24.341 12.7812 24.412 12.4773 24.554 12.2386C24.6961 12 24.8879 11.8111 25.1293 11.6719C25.3708 11.5327 25.6407 11.4276 25.939 11.3565C26.2373 11.2855 26.5413 11.2315 26.8509 11.1946C27.243 11.1491 27.5611 11.1122 27.8055 11.0838C28.0498 11.0526 28.2273 11.0028 28.3381 10.9347C28.4489 10.8665 28.5043 10.7557 28.5043 10.6023V10.5724C28.5043 10.2003 28.3992 9.91193 28.189 9.70739C27.9816 9.50284 27.6719 9.40057 27.26 9.40057C26.831 9.40057 26.493 9.49574 26.2458 9.68608C26.0015 9.87358 25.8325 10.0824 25.7387 10.3125L24.5413 10.0398C24.6833 9.64205 24.8907 9.32102 25.1634 9.0767C25.439 8.82955 25.7557 8.65057 26.1137 8.53977C26.4717 8.42614 26.8481 8.36932 27.243 8.36932C27.5043 8.36932 27.7813 8.40057 28.0739 8.46307C28.3694 8.52273 28.645 8.63352 28.9006 8.79545C29.1592 8.95739 29.3708 9.18892 29.5356 9.49006C29.7004 9.78835 29.7827 10.1761 29.7827 10.6534V15H28.5384V14.1051H28.4873C28.4049 14.2699 28.2813 14.4318 28.1165 14.5909C27.9518 14.75 27.7401 14.8821 27.4816 14.9872C27.2231 15.0923 26.9134 15.1449 26.5526 15.1449ZM26.8296 14.1222C27.1819 14.1222 27.483 14.0526 27.733 13.9134C27.9859 13.7741 28.1776 13.5923 28.3083 13.3679C28.4418 13.1406 28.5086 12.8977 28.5086 12.6392V11.7955C28.4631 11.8409 28.3751 11.8835 28.2444 11.9233C28.1165 11.9602 27.9702 11.9929 27.8055 12.0213C27.6407 12.0469 27.4802 12.071 27.3239 12.0938C27.1677 12.1136 27.037 12.1307 26.9319 12.1449C26.6847 12.1761 26.4589 12.2287 26.2543 12.3026C26.0526 12.3764 25.8907 12.483 25.7685 12.6222C25.6492 12.7585 25.5896 12.9403 25.5896 13.1676C25.5896 13.483 25.706 13.7216 25.939 13.8835C26.1719 14.0426 26.4688 14.1222 26.8296 14.1222ZM32.754 6.27273V15H31.4798V6.27273H32.754Z"
                    fill="#713B12"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>

          <div className="side_profile">
            <div className="side_profile_box">
              {/* <span className="side_profile_box_button"> */}
              <button
                className="side_profile_box_button"
                tabIndex="0"
                type="button"
              >
                <div className="btn_left">
                  <div className="side_profile_box_item">
                    <div className="side_profile_box_item_text">M</div>
                  </div>
                  <div className="side_profile_box_user_detail">
                    <div className="user_detail_head">
                      <span>My Business</span>
                    </div>
                    <div className="user_detail_number">
                      <span>{login}</span>
                    </div>
                    <div className="user_detail_online">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="5" cy="5" r="5" fill="#fff"></circle>
                      </svg>
                      <span className="online_text">Online</span>
                    </div>
                  </div>
                </div>
                <div className="btn_right">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.6582 6.98913C15.7877 7.15663 15.8486 7.36714 15.8286 7.5779C15.8085 7.78867 15.7089 7.9839 15.5501 8.12393C15.3913 8.26395 15.1852 8.33828 14.9736 8.33182C14.7619 8.32536 14.5607 8.23859 14.4107 8.08913L9.9999 3.6783L5.58907 8.08913L5.51074 8.1583C5.34324 8.28781 5.13274 8.34871 4.92197 8.32863C4.7112 8.30855 4.51597 8.209 4.37594 8.0502C4.23592 7.89139 4.16159 7.68524 4.16805 7.47362C4.17451 7.26199 4.26128 7.06076 4.41074 6.9108L9.41074 1.9108L9.48907 1.84163C9.64941 1.71726 9.84962 1.65566 10.0521 1.66839C10.2547 1.68113 10.4456 1.76732 10.5891 1.9108L15.5891 6.9108L15.6582 6.98913ZM4.34157 13.0108C4.21206 12.8433 4.15116 12.6328 4.17124 12.422C4.19132 12.2113 4.29087 12.016 4.44967 11.876C4.60848 11.736 4.81463 11.6616 5.02625 11.6681C5.23788 11.6746 5.43911 11.7613 5.58907 11.9108L9.9999 16.3216L14.4107 11.9108L14.4891 11.8416C14.6566 11.7121 14.8671 11.6512 15.0778 11.6713C15.2886 11.6914 15.4838 11.7909 15.6239 11.9497C15.7639 12.1085 15.8382 12.3147 15.8318 12.5263C15.8253 12.7379 15.7385 12.9392 15.5891 13.0891L10.5891 18.0891L10.5107 18.1583C10.3504 18.2827 10.1502 18.3443 9.94767 18.3315C9.74515 18.3188 9.55423 18.2326 9.41074 18.0891L4.41074 13.0891L4.34157 13.0108Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </button>
              {/* </span> */}
            </div>
            <div className="dialog-container"></div>
          </div>

          {/* Sidebar Demo Account btn Start */}
          {/* <div className="sidebar_demo_account">
                            <div className="demo_title">Explore demo account.</div>
                            <div className="demo_summary">Try all features with full details on bills, parties & items</div>

                            <div>
                                <button className="dash_demo_btn" tabindex="0" type="button">
                                    <span className="demo_btn_title">View Demo Account</span>
                                    <div className="leftStripe">
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(255, 156, 0)" }}><path d="M13.5 0L0 13.5V26.5L26.5 0H13.5Z" fill="#FF9C00"></path>
                                        </svg>
                                    </div>
                                    <div className="rightStripe">
                                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 35.5L27.5 13V0L0 31H6.5L8 35.5Z" fill="#FF9C00"></path>
                                        </svg>
                                    </div>
                                    <span className=""></span>
                                </button>
                            </div>
                        </div> */}
          {/* Sidebar Demo Account btn End */}

          <div className="sidebar_drawer_body">
            <ul className="sidebar_drawer_ul">
              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/full-report"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.75">
                        <path
                          opacity="0.12"
                          d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
                          fill="white"
                        ></path>
                        <path
                          d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Dashboard</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>
              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/add"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.75">
                        <path
                          opacity="0.12"
                          d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
                          fill="white"
                        ></path>
                        <path
                          d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Add User</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>

              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/reports"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_8931_11323)">
                        <path
                          d="M8 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H11.697"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18 14V18H22"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18 11V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 3H10C8.89543 3 8 3.89543 8 5C8 6.10457 8.89543 7 10 7H12C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3Z"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8 11H12"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8 15H11"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_8931_11323">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Customers</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>

              <div
                className="sidebar_drawer_ul_link"
                onClick={() => handleDropdownClick("daybook")}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_8931_11323)">
                        <path
                          d="M8 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H11.697"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18 14V18H22"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18 11V7C18 6.46957 17.7893 5.96086 17.4142 5.58579C17.0391 5.21071 16.5304 5 16 5H14"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 3H10C8.89543 3 8 3.89543 8 5C8 6.10457 8.89543 7 10 7H12C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3Z"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8 11H12"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8 15H11"
                          stroke="#B4B4CA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_8931_11323">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="sidebar_drawer_ul_text">
                    <h5>Daybook</h5>

                    {dropdown === "daybook" ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>

                {dropdown === "daybook" && (
                  <>
                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/daybook/deposit"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          <span> </span>
                        </div>
                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Deposit</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>

                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/daybook/withdraw"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>
                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Withdraw</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>

                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/daybook/daybook-report"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>
                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Daybook Report</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>
                  </>
                )}
              </div>

              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/bank"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Bank</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>

              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/expenses-tracker"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Expenses Tracker</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>

              <div
                className="sidebar_drawer_ul_link"
                onClick={() => handleDropdownClick("matchSettling")}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Match Settling</h5>
                    {dropdown === "matchSettling" ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>

                {dropdown === "matchSettling" && (
                  <>
                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/match-settling/result"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>

                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Result</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>

                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/match-settling/report"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>

                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Report</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>
                  </>
                )}
              </div>

              {/* follow up dropdown */}
              <div
                className="sidebar_drawer_ul_link"
                onClick={() => handleDropdownClick("followUp")}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="sidebar_drawer_ul_text">
                    <h5>Follow Up</h5>
                    {dropdown === "followUp" ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>

                {dropdown === "followUp" && (
                  <>
                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/followup/create-list"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>

                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Create List</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>

                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/followup/view-list"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>

                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>View Lists</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>
                  </>
                )}
              </div>

              <div
                className="sidebar_drawer_ul_link"
                onClick={() => handleDropdownClick("settling")}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="sidebar_drawer_ul_text">
                    <h5>Settling</h5>
                    {dropdown === "settling" ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>

                {dropdown === "settling" && (
                  <>
                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/settling/transaction"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>

                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Transaction</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>

                    <NavLink
                      className="sidebar_drawer_ul_link"
                      to="/dashboard/settling/report"
                      onClick={mobileHandleToggle}
                    >
                      <div
                        className="sidebar_drawer_ul_btn"
                        tabIndex="0"
                        role="button"
                      >
                        <div className="sidebar_drawer_ul_icon" aria-label="">
                          {" "}
                        </div>

                        <div
                          className="sidebar_drawer_ul_text"
                          style={{ paddingLeft: "25px" }}
                        >
                          <h5>Report</h5>
                        </div>
                        <span className="sidebar_overflow_layer"></span>
                      </div>
                    </NavLink>
                  </>
                )}
              </div>

              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/payroll"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="sidebar_drawer_ul_text">
                    <h5>Payroll</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>

              <NavLink
                className="sidebar_drawer_ul_link"
                to="/dashboard/settings"
                onClick={mobileHandleToggle}
              >
                <div
                  className="sidebar_drawer_ul_btn"
                  tabIndex="0"
                  role="button"
                >
                  <div className="sidebar_drawer_ul_icon" aria-label="">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10V2C4 1.44772 4.44772 1 5 1H14C14.5523 1 15 1.44772 15 2V16H10.6957"
                        stroke="white"
                      ></path>
                      <path
                        d="M14 16H16C17.1046 16 18 15.1046 18 14V11H15.2"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.5 5H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6.5 8H13"
                        stroke="white"
                        strokeLinecap="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11C0.447715 11 0 11.4477 0 12V17C0 17.5523 0.447715 18 1 18H10C10.5523 18 11 17.5523 11 17V12C11 11.4477 10.5523 11 10 11H1ZM5.5 16C6.32843 16 7 15.3284 7 14.5C7 13.6716 6.32843 13 5.5 13C4.67157 13 4 13.6716 4 14.5C4 15.3284 4.67157 16 5.5 16ZM0.75 12.5C0.75 12.0858 1.08579 11.75 1.5 11.75H9.5C9.91421 11.75 10.25 12.0858 10.25 12.5V16.5C10.25 16.9142 9.91421 17.25 9.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V12.5ZM1.5 12.25C1.36193 12.25 1.25 12.3619 1.25 12.5V16.5C1.25 16.6381 1.36193 16.75 1.5 16.75H9.5C9.63807 16.75 9.75 16.6381 9.75 16.5V12.5C9.75 12.3619 9.63807 12.25 9.5 12.25H1.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="sidebar_drawer_ul_text">
                    <h5>Settings</h5>
                  </div>
                  <span className="sidebar_overflow_layer"></span>
                </div>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
