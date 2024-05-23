import React, { useState } from 'react'

function Pagination() {
  return (
    <div>
      <nav aria-label="" className=' d-grid px-5 mx-5 justify-content-end'>
        <ul className="pagination mx-5 ">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Pagination