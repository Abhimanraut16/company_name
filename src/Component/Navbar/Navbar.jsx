import React, { useState } from 'react'
import { FaBars, FaHome, FaServicestack, FaTh, FaUserAlt } from 'react-icons/fa'
import { FaRegChartBar } from 'react-icons/fa6'
import './navbar.css'
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const [isOpens, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpens)

    const toggleIcon = () => {
        setIsOpen(!isOpen);
        setIsVisible(!isVisible);

    };

    return (
        <div>

            <div className="main">
                <div style={{ width: isOpens ? "200px" : "50px" }} className="sidebar">

                    <div className="top_section">
                        <h1 style={{ display: isOpens ? "block" : "none" }} className='logo'>slide</h1>
                        <div style={{ marginLeft: isOpens ? "50px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <div className="link">
                        <div style={{ marginLeft: isOpens ? "50px" : "15px" }} ><FaHome className='link_text' /> <Link to={"/"} style={{ display: isOpens ? "block" : "none" }}>Home</Link> </div>
                        <div style={{ marginLeft: isOpens ? "50px" : "15px" }}><FaRegChartBar className='link_text' />
                            <di onClick={toggleIcon} style={{ display: isOpens ? "block" : "none" }}><Link to="element" >
                                <span className='style={{ display: isOpens ? "block" : "none" }}>'>Element </span>
                                {isVisible ? (
                                    <i className="fas fa-chevron-right "></i>

                                ) : (
                                    <i className="fas fa-chevron-down"></i>

                                )}

                                {isOpen && (
                                    <>
                                        {isOpen && (
                                            <div   className='element' style={{ display: isOpens ? "block" : "none" }}>
                                                <Link to=""> element1</Link>
                                                <Link to=""> element1</Link>
                
                                            </div>
                                        )}
                                    </>
                                )}

                            </Link>

                            </di>


                        </div>
                        <div style={{ marginLeft: isOpens ? "50px" : "15px" }}><FaServicestack className='link_text' /><Link to={"/"} style={{ display: isOpens ? "block" : "none" }}>Services</Link> </div>
                        <div style={{ marginLeft: isOpens ? "50px" : "15px" }}><CiSettings className='link_text' /><Link to={"/"} style={{ display: isOpens ? "block" : "none" }}>Setting</Link> </div>
        


                    </div>



                </div>

            </div>
        </div>


    )
}

export default Navbar










