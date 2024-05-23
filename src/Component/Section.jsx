import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Nav/Home'
import Services from './Nav/Services'
import EmployeeDetails from './Nav/EmployeeDetails'
import Setting from './Nav/Setting'

function Section() {
    return (
        <div>

            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                {/* <Route path='/element' element={<Element />} /> */}
                {/* <Route path='/service' element={<Services />} /> */}
                {/* <Route path='/setting' element={<Setting />} /> */}
                {/* <Route path='/EmployeeDetails/:eid' element={<EmployeeDetails />} /> */}


            </Routes>
        </div>
    )
}

export default Section















// import React, { useState } from 'react'
// import './navbar.css'
// import { Link } from 'react-router-dom';

// function Navbar() {
//     const [isVisible, setIsVisible] = useState(true);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleIcon = () => {
//         setIsOpen(!isOpen);
//         setIsVisible(!isVisible);

//     };
//     let sidemenu = document.getElementById("sidemenu");

//     const [active, setActive] = useState('navBar')
//     const showNav = () => {
//         setActive('navBar  activeNavbar');
//         sidemenu.style.right = "0"
//     }
//     const removNav = () => {
//         setActive('navBar')
//         sidemenu.style.right = "-200px"
//     }

//     return (
//         <div>
//             <div className="main">
//                 <div className={active}>
//                     <div className="nav">
//                         <ul id="sidemenu">
//                             <li className="active"><i className="fa-solid fa-house" style={{ color: '#ffffff' }} /><Link to="/">HOME</Link></li>
//                             <li onClick={toggleIcon}><i className="fa-solid fa-briefcase" style={{ color: '#ffffff', }} /><Link to="element">
//                                 <span>Element </span>
//                                 {isOpen ? (
//                                     <i className="fas fa-chevron-right "></i>

//                                 ) : (
//                                     <i className="fas fa-chevron-down"></i>

//                                 )}

//                                 {isVisible && (
//                                     <>
//                                         {isVisible && (
//                                             <div style={{ padding: '10px', }}>
//                                                 <li><a href="">Sbu element1</a> </li>
//                                                 <li><a href="">Sbu element1</a></li>
//                                                 <li><a href="">Sbu element1</a></li>
//                                             </div>
//                                         )}
//                                     </>
//                                 )}

//                             </Link>

//                             </li>
//                             <li><i className="fa-brands fa-servicestack" style={{ color: '#ffffff' }} /><Link to="service">SERVICES</Link></li>
//                             <li><i className="fa-solid fa-gear"
//                                 style={{ color: '#fbfcfe' }} /><Link to="setting">Setting</Link></li>
//                         </ul>
//                         <div onClick={removNav} className="clossNavbar">
//                             <i class="fa-solid fa-xmark fas"></i>
//                         </div>
//                     </div>
//                 </div>
//                 <div onClick={showNav} className="toggleNavbar">
//                     <i class="fa-solid fa-bars fas"></i>
//                 </div>
//             </div>
//         </div>


//     )
// }

// export default Navbar

