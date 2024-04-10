import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import ProductReviewCard from './customer/components/ProductDetails/ProductReviewCard';
import Cart from './customer/components/Cart/CartItem'
import Checkout from './customer/components/Checkout/Checkout'
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRoutes from './Routes/CustomerRoutes';

function App() {
  return (
    <div className="App">

    {/* Hello ecomm */}
    <Navigation/>

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>} >

        </Route>
      </Routes>
      
      <div>
        <Footer/>
      </div>
      
      <div>
        {/* <HomePage/>  */}
        {/* Instead we are rendering Product Page for development */}
        {/* <Product/> */}
        {/* Instead we are rendering Product Details Page for development */}
        {/* <ProductDetails/> */}
        {/* Instead we are rendering Cart Page for development */}
        {/* <Cart/> */}
        {/* Instead we are rendering CheckOut Page for development */}
        {/* <Checkout/> */}
        {/* Instead we are rendering Order Page for development */}
        {/* <OrderDetails/>*/}

      </div>
      
     
    </div>
  );
}

export default App;
