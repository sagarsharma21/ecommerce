import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRoutes = () => {
  return (
    <div>CustomerRoutes
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId/' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

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
    </div>
  )
}

export default CustomerRoutes