// import React, { useState } from 'react'
// import { FaBars, FaTh, FaUserAlt } from 'react-icons/fa'
// import { FaRegChartBar } from 'react-icons/fa6'
// import './sidebar.css'

// function Sidebar() {
//     const [isOpens, setOpen] = useState(false)
//     const toggle = () => setOpen(!isOpens)

//     return (
//         <div className="container">
//             <div style={{ width: isOpens ? "200px" : "50px" }} className="sidebar">

//                 <div className="top_section">
//                     <h1 style={{ display: isOpens ? "block" : "none" }} className='logo'>logo</h1>
//                     <div style={{ marginLeft: isOpens ? "50px" : "0px" }} className="bars">
//                         <FaBars onClick={toggle} />
//                     </div>
//                 </div>

//                 <div className="link">

//                     <div style={{ marginLeft: isOpens ? "50px" : "15px" }} ><FaTh className='link_text' /> <p style={{ display: isOpens ? "block" : "none" }}> home</p> </div>
//                     <div style={{ marginLeft: isOpens ? "50px" : "15px" }}><FaRegChartBar className='link_text' /><p style={{ display: isOpens ? "block" : "none" }}>servise</p> </div>
//                     <div style={{ marginLeft: isOpens ? "50px" : "15px" }}><FaUserAlt className='link_text' /><p style={{ display: isOpens ? "block" : "none" }}>home</p> </div>

//                 </div>



//             </div>

//         </div>

//     )
// }

// export default Sidebar