import React from 'react'
import './main.css'
import Data from '../Data'
import Pagination from '../Pagination/Pagination'
// import { Link } from 'react-router-dom'

function Main() {
    return (
        <div>

            <div class="middle">
                <div className="container mainCount">
                    <div className="row bg-white fw-bold text-black p-3 showdo">
                        <div className="col-1 count">SN</div>
                        <div className="col-2 count">Member Name</div>
                        <div className="col-2 count">Gender</div>
                        <div className="col-2 count">Address</div>
                        <div className="col-2 count">Mobile no</div>
                        <div className="col-2 count">Salary</div>
                        <div className="col-1 count">Action</div>
                    </div>
                    {Data.map((d) =>
                        <div className="row bg-white text-black border p-1 dataCount">
                            <div className="col-1 dataCount">{d.id}</div>
                            <div className="col-2 dataCount">{d.names}</div>
                            <div className="col-2 dataCount">{d.Address}</div>
                            <div className="col-2 dataCount">{d.Mobile_no}</div>
                            <div className="col-2 dataCount">{d.Gender}</div>
                            <div className="col-2 dataCount">{d.Salary}</div>
                            <div className="col-1">
                                <div class="d-grid gap-1 d-md-flex justify-content-md-center ">
                                    <button class="btn btn-primary  rounded-circle pen " type="button"><i class="fa-solid fa-pen"></i></button>
                                    <button class="btn text-light rounded-circle bg-danger transh" type="button"><i class="fa-solid fa-trash-can"></i></button>
                                </div>



                            </div>

                        </div>
                    )}



                </div>
         


            </div>

        </div>

    )
}

export default Main