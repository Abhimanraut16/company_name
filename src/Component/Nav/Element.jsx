// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { FaBars, FaRegChartBar, FaTh, FaUserAlt } from 'react-icons/fa'

// function Element() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);

//   const [isOpens, setOpen] = useState(false)
//   const toggle = () => setOpen(!isOpens)

//   const toggleIcon = () => {
//     setIsOpen(!isOpen);
//     setIsVisible(!isVisible);

//   };
//   return (
//     <div>
      
//       <div style={{ marginLeft: isOpens ? "50px" : "15px" }}><FaRegChartBar className='link_text' />
//         <div onClick={toggleIcon}>
//           <Link to="element">
//             <span>Element </span>
//             {isVisible ? (
//               <i className="fas fa-chevron-right "></i>

//             ) : (
//               <i className="fas fa-chevron-down"></i>

//             )}

//             {isOpen && (
//               <>
//                 {isOpen && (
//                   <div className='element' clsstyle={{ padding: '1px', }}>
//                     <Link to=""> element1</Link>
//                     <Link to=""> element1</Link>
//                     <Link to="">element1</Link>
//                   </div>
//                 )}
//               </>
//             )}

//           </Link>

//         </div>


//       </div>
//     </div>
//   )
// }

// export default Element