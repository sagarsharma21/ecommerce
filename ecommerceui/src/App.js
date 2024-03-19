import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="App">
      {/* Hello ecomm */}
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* Instead we are rendering Product Page for development */}
        <Product/>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
