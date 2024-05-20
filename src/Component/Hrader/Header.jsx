import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Company Name</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className=" mx-5 fs-4 text-light"><i class="fa-solid fa-bars"></i></div>

                        </ul>
                        <div className="d-flex">
                            <div className="text-light me-2">
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn rounded-circle transh bg-body" type="button"> <i class="fa-solid fa-user"></i></button>
                                    <div className="px-3 ">User Name</div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav >

        </div >
    )
}

export default Header