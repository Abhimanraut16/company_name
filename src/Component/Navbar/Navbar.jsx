import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
        setIsVisible(!isVisible);

    };

    return (
        <div>
            <div className="main">
                <ul id="sidemenu">
                    <li className="active"><i className="fa-solid fa-house" style={{ color: '#ffffff' }} /><Link to="/">HOME</Link></li>
                    <li onClick={toggleIcon}><i className="fa-solid fa-briefcase" style={{ color: '#ffffff', }} /><Link to="element">
                        <span>Element </span>
                        {isOpen ? (
                            <i className="fas fa-chevron-right"></i>

                        ) : (
                            <i className="fas fa-chevron-down"></i>

                        )}

                        {isVisible && (
                            <>
                                {isVisible && (
                                    <div style={{ padding: '10px', }}>
                                        <li><a href="">Sbu element1</a> </li>
                                        <li><a href="">Sbu element1</a></li>
                                        <li><a href="">Sbu element1</a></li>
                                    </div>
                                )}
                            </>
                        )}

                    </Link>

                    </li>
                    <li><i className="fa-brands fa-servicestack" style={{ color: '#ffffff' }} /><Link to="service">SERVICES</Link></li>
                    <li><i className="fa-solid fa-gear" 
                        style={{ color: '#fbfcfe' }} /><Link to="setting">Setting</Link></li>
                </ul>
            </div>
        </div>


    )
}

export default Navbar

