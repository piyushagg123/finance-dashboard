import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarContext = ({ children }) => {
    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        if (["/", "/blogs", "/privacy-policy", "/terms-and-conditions", "/news", "/about"].includes(location.pathname)) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [location]);

    return (
        <div>{showNavbar && children}</div>
    )
}

export default NavbarContext