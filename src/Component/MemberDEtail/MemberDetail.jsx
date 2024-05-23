import React from 'react'
import './member.css'
function MemberDetail() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid ">
                        <a className="navbar-brand member-detail " href="#">Member Details</a>

                        <form className="d-flex ms-auto search" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <div className=" d-grid grid gap-3">
                            <button type="button" className=" btn btn-outline-primary bg-primary text-light rounded-circle"> <i class="fa-solid fa-plus"></i></button>
                        </div>

                    </div>
                </nav>


            </div>

        </div>
    )
}

export default MemberDetail