import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './Routes/AllRoutes'
import Footer from './components/footer/Footer'
import LogIn from './components/login/LogIn'


const App = () => {

    const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LogIn  setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <AllRoutes />
    </div>
    <Footer/>
    </>
  )
}

export default App