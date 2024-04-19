import React from 'react'
import Navbar from '../../frontend/src/components/Navbar/Navbar.jsx'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/order' element = {<PlaceOrder/>}/>
      




      </Routes>
    </div>
  )
}

export default App
