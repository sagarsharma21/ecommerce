import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
// import HomePage from './customer/pages/HomePage/HomePage';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import ProductReviewCard from './customer/components/ProductDetails/ProductReviewCard';
// import Cart from './customer/components/Cart/CartItem'
// import Checkout from './customer/components/Checkout/Checkout'
// import Order from './customer/components/Order/Order';
// import OrderDetails from './customer/components/Order/OrderDetails';
// import NotFound from './Pages/NotFound';
import CustomerRoutes from './Routes/CustomerRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Auth/Action';
import AdminRouters from './Routes/AdminRouters';

function App() {
  const {auth} = useSelector((store) => store);
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  
  useEffect(() => {
    if(jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  return (
    <div className="App">

      {/* Hello ecomm */}
      {/* <Navigation/> */}

        <Routes>
          <Route path='/*' element={<CustomerRoutes />} ></Route>

          <Route path='/admin/*' element={<AdminRouters />}></Route>

        </Routes>
        
        <div>
          {/* <Footer/> */}
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
