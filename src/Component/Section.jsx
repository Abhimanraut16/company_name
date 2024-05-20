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