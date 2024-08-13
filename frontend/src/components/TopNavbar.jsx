import React from 'react'
import '../css/TopNavbar.css'
import { FiMenu } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

const TopNavbar = ({ handleToggle, sidebarToggle }) => {
    return (
        <div>
            <section className='tobnavbar_container'>
                <div className="topbar_div" style={{display:"flex", justifyContent:"space-between"}}>
                    <button className={sidebarToggle ? "menu_icon_btn" : "menu_icon_btn toggle_topbar"} onClick={handleToggle} >{<FiMenu />}</button>
                    <div className="other_right_links">
                        <div className="subscribe">
                            <FaRegBell />
                        </div>
                        <div className="profile">
                            <div className="pro_text">
                                <p>
                                    <b>Shivam Jain</b>
                                </p>
                                <p>Owner</p>
                            </div>
                            <div className="pro_icon">SJ</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default TopNavbar