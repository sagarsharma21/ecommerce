import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button, } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //get orderId from URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const jwt = localStorage.getItem("jwt");

  const { order } = useSelector((state) => state);
  
  console.log("orderId ", order.order);

  useEffect(() => {
      dispatch(getOrderById(orderId))
  }, [orderId]);
  
  // const handleCreatePayment = () => {
  //   const data = {orderId: order.order?.id, jwt};
  //   dispatch(createPayment(data));
  // }
	
	const handleCreatePayment = () => {
		dispatch(createPayment({orderId, jwt, navigate }));
    console.log("called dispatch createPayment from Ordersummary.jsx");
	}
  // const handleCheckout= () => {
  //   dispatch(createPayment(orderId));

  // }

  return (
    <div className='space-y-5'>
      <span className='font-semibold'>Order Summary</span>
      <div className='p-5 shadow-lg rounded-s-md border text-gray-700'>
        <AddressCard address={order.order?.shippingAddress} />

      </div>
   

    <div>
      {/* Cart */}
      <div className='lg:grid grid-cols-3 relative border border-black'> 
        <div className='lg:col-span-2'>
          {order.order?.orderItems.map((item) => (
            <>
            <CartItem item={item} showButton={false}/>
            </>
          ))}
        </div>

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border p-5 bg-white shadow-lg rounded-md'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
            <hr/>

            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price: ({order.order?.totalItem} item) </span>
                <span>₹ {order.order?.totalPrice} </span>
              </div>
            
              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>-₹ {order.order?.discount}</span>
              </div>
            
              <div className='flex justify-between pt-3 text-green-600'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>₹ 0</span>
              </div>
            
              <div className='flex justify-between pt-3  font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹ {order.order?.totalDiscountedPrice} </span>
              </div>
            </div>
                 
                  <Button
                    onClick={handleCreatePayment} //handleCreatePayment
                    variant="contained" className='w-full mt-5'
                    sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
                    Checkout
                  </Button>

          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OrderSummary;