import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'

function Header({ setShowLogin }) {

    const [menu, setMenu] = useState("home");
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link to="#" onClick={() => setMenu("home")} className={`menu === "home" ? "active" : "" navbar-brand company `}>Company Name</Link>
                                        <div className="text-light">
                        <div class="icon">
                            <button class="btn transh user" type="button"> <i class="fa-solid fa-user"></i></button>
                            <div className="cursor sign" onClick={() => setShowLogin(true)}>Sign in</div>


                        </div>

                    </div>
                    {/* </div> */}
                </div>
            </nav >

        </div >
    )
}

export default Header