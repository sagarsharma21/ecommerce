import React, { useEffect } from 'react'
import CartItem from './CartItem' 
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const jwt=localStorage.getItem("jwt");
    const {cart} = useSelector(store=> store);
    console.log("cart ", cart);

    useEffect(() => {
      dispatch(getCart(jwt));
    }, [jwt]);

    const handleCheckout = () => {
      navigate('/checkout?step=2')
    }
  
  return (
    // <div>Cart
     
    //   <div className='lg:grid grid-cols-3 lg:px-16 relative'>
    //     <div className='col-span-2'>
    //     {[1,1,1,1,1].map((item)=> <CartItem/>)  }
    //     </div>
    //     <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
    //     <div className='border'>
    //       <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
    //       <hr/>
    //       <div className='space-y-3 font-semibold mb-10'>
    //         <div className='flex justify-between pt-3 text-black'>
    //           <span>Price</span>
    //           <span>₹2000</span>

    //         </div>
          
    //         <div className='flex justify-between pt-3 '>
    //           <span>Discount</span>
    //           <span className='text-green-600'>-₹1500</span>

    //         </div>
          
    //         <div className='flex justify-between pt-3 text-green-600'>
    //           <span>Delivery Charges</span>
    //           <span className='text-green-600'>100</span>

    //         </div>
          
    //         <div className='flex justify-between pt-3  font-bold'>
    //           <span>Total Amount</span>
    //           <span className='text-green-600'>₹4000</span>

    //         </div>
    //     </div>
    //             <Button
    //               onClick={handleCheckout}
    //               variant="contained" className='w-full mt-5'
    //               sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
    //               Checkout
    //             </Button>
    //     </div>
        
    //   </div>
    //   </div>
    // </div>

    <div className="">
      {cart.cartItems.length>0 && <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {cart.cartItems.map((item) => (
            <>
              <CartItem item={item} showButton={true}/>
            </>
          ))}
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price ({cart.cart?.totalItem} item)</span>
              <span>₹ {cart.cart.totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹ {cart.cart?.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹ {cart.cart?.totalDiscountedPrice}</span>
            </div>
          </div>

          <Button
            onClick={() => navigate("/checkout?step=2")}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Check Out
          </Button>
        </div>
      </div>
      </div>}
      
    </div>
  );

}

export default Cart;