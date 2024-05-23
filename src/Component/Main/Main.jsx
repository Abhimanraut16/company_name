import React from 'react'
import './main.css'
import Data from '../Data'

function Main() {
    return (
        <div>
            <div className="row bg-white fw-bold text-black  showdo">

                <div className="tabular--wrapper">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>member Name</th>
                                    <th>Address</th>
                                    <th>Mobile no</th>
                                    <th>Gender</th>
                                    <th>Salary</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {Data.map((d) =>
                                    <tr>
                                        <td>{d.id}</td>
                                        <td>{d.names}</td>
                                        <td>{d.Address}</td>
                                        <td>{d.Mobile_no}</td>
                                        <td>{d.Gender}</td>
                                        <td>{d.Salary}</td>
                                        <td className='d-grid gap-1 d-md-flex justify-content-md-center'>
                                            <button class="btn btn-primary  rounded-circle pen " type="button"><i class="fa-solid fa-pen"></i></button>
                                            <button class="btn text-light rounded-circle bg-danger transh" type="button"><i class="fa-solid fa-trash-can"></i></button>
                                        </td>


                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Main