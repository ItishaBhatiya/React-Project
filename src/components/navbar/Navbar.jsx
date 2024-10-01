import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../contextapi/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setmenu] = useState("")
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="error" className="logo" /></Link>
      <div className="navbar-menu">
        <Link onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""} to='/'>Home</Link>
        <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#contact-us' onClick={() => setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>ContactUs</a>
        <Link onClick={() => setmenu("order")} className={menu === "order" ? "active" : ""} to='/order'>Order</Link>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="error" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="error"/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}>
          </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Log In</button>
      </div>
    </div>
  )
}

export default Navbar