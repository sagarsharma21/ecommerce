import React from 'react'
import { Route, Routes, useLocation  } from 'react-router-dom'
import { } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Order from "../customer/components/Order/Order"  
import { Home } from '@mui/icons-material'
//import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { customTheme, customerTheme } from '../Theme/customTheme'
import ProductCard from '../customer/components/Product/ProductCard'

const CustomerRoutes = () => {
  const location = useLocation();

  // const showNavigation = location.pathname ! == "*";

  return (
    <div>{/* CustomerRoutes */}
      <ThemeProvider theme={customerTheme}>
        <div>
            <Routes>
              <Route path='/login' element={<HomePage/>}></Route>
              <Route path='/register' element={<HomePage/>}></Route>
              {/* <Route path='/p' element={<ProductCard/>}></Route> */}

                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId/' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                
                <Route path="/account/order" element={<Order />}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>

                 {/* <HomePage/> */}
        {/* Instead we are rendering Product Page for development */}
        {/* <Product/> */}
        {/* Instead we are rendering Product Details Page for development */}
        {/* <ProductDetails/> */}
        {/* Instead we are rendering Cart Page for development */}
        {/* <Cart/> */}
        {/* Instead we are rendering CheckOut Page for development */}
        {/* <Checkout/> */}
        {/* Instead we are rendering Order Page for development */}
        {/* <OrderDetails/> */}

            </Routes>
        </div>
      </ThemeProvider> 
    </div>
  )
}

export default CustomerRoutes;