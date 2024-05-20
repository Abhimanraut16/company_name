import React from 'react'
import Header from './Component/Hrader/Header'
import Navbar from './Component/Navbar/Navbar'
import Main from './Component/Main/Main'
import MemberDetail from './Component/MemberDEtail/MemberDetail'
import Section from './Component/Section'
import Pagination from './Component/Pagination/Pagination'

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <div className="right">
    <div className="search-box ">
      <form action className="search">
        <span className="icon-large"><i className="ri-search-line" /></span>
        <input type="search" placeholder="Search" />
        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>

      </form>

      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</div>

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MemberDetail />
      <Main />
      <Pagination/>
      <Section />


    </div >
  )
}

export default App