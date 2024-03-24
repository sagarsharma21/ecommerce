import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import ProductReviewCard from './customer/components/ProductDetails/ProductReviewCard';
import Cart from './customer/components/Cart/CartItem'
import Checkout from './customer/components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      {/* Hello ecomm */}
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* Instead we are rendering Product Page for development */}
        {/* <Product/> */}
        {/* Instead we are rendering Product Details Page for development */}
        {/* <ProductDetails/> */}
        {/* Instead we are rendering Cart Page for development */}
        {/* <Cart/> */}
        {/* Instead we are rendering CheckOut Page for development */}
        <Checkout/>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
