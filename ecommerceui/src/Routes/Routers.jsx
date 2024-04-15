import { Routes, Route } from "react-router-dom"
import Navigation from "../customer/components/Navigation/Navigation"
import HomePage from "../customer/pages/HomePage/HomePage"
import Product from "../customer/components/Product/Product"

const Routers = () => {
    
    return(
        <div>
            <div>
                <Navigation /> 
            </div>

            <div className="">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/men" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />                    
                </Routes>
            </div>
        </div>
    )
};
export default Routers;