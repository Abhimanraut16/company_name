import React, { useState } from 'react'
import Header from './Component/Hrader/Header'
import Navbar from './Component/Navbar/Navbar'
import Main from './Component/Main/Main'
import MemberDetail from './Component/MemberDEtail/MemberDetail'
import Section from './Component/Section'
import Pagination from './Component/Pagination/Pagination'
import Login from './Component/Login/Loging'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin} />
      <Navbar />
      <MemberDetail />
      <Main />
      <Pagination />
      <Section />

    </div >
  )
}

export default App