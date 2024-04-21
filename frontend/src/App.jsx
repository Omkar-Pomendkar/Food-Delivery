import React from 'react'
import Navbar from '../../frontend/src/components/Navbar/Navbar.jsx'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import Loginpopup from './components/LoginPopup/Loginpopup.jsx'
import { useState } from 'react'

const App = () => {

    // Mounting Login Pop up in the Home Page and creating State
    const[showLogin,setShowLogin] = useState(false)

  return (
    <>

    {showLogin? <Loginpopup setShowLogin= {setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>

      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/order' element = {<PlaceOrder/>}/>
      




      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
