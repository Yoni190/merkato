import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainLayout from './MainLayout'
import Category from './pages/Category'
import ProductDetails from './pages/ProductDetails'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Address from './pages/Address'
import OrderSummary from './pages/OrderSummary'
import OrderSuccessful from './pages/OrderSuccessful'
import AdminLogin from './pages/admin/Login'
import AdminHome from './pages/admin/Home'
import AdminMainLayout from './AdminMainLayout'
import Categories from './pages/admin/categories/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/address' element={<Address />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/order-successful' element={<OrderSuccessful />} />
        </Route>
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route element={<AdminMainLayout />}>
          <Route path='/admin/home' element={<AdminHome />} />
          <Route path='/admin/categories' element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
