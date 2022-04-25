import React from 'react'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return(
        <div className="Navbar">
            <img className="nav-logo" onClick={goToHome} src="the-peaks.png"></img>
        </div>
    )
}

export default Navbar

