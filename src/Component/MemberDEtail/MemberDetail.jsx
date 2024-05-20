import React from 'react'
import './member.css'
function MemberDetail() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg member">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="#">Member Details</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex ms-auto search" role="search">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                            <div className=" d-grid grid gap-3">
                                <button type="button" className=" btn btn-outline-primary bg-primary text-light rounded-circle"> <i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    )
}

export default MemberDetail