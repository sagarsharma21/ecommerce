import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import OrderTracker from './OrderTracker'
import { Box, Button, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'


const OrderDetails = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  
  console.log("order ", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);
  
  return (
    <div className='px: 5 lg:px-20'>OrderDetails
      <div className='border shadow-md'>
          <h1 className='font-semibold text-xl py-6'>Delivery Address</h1>
          <AddressCard address={order.order?.shippingAddress} />
      </div>

      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTracker activeSteps={
                  order.order?.orderStatus === "PLACED"
                    ? 1
                    : order.order?.orderStatus === "CONFIRMED"
                    ? 2
                    : order.order?.orderStatus === "SHIPPED"
                    ? 3
                    : order.order?.orderStatus === "DELIVERED"
                    ? 4
                    : 5
                  } />
          </Grid>

          <Grid item>
                  {order.order?.orderStatus === "DELIVERED" && <Button sx={{ color: ""}}
                  color="error" variant="text" >RETURN</Button> }

                  {order.order?.orderStatus !== "DELIVERED" && <Button sx={{color: 
                    deepPurple[500] }} variant='text' >CANCEL ORDER</Button> }
          </Grid>
        </Grid>
      </Box>
      <div className='py-20'>
        
      </div>
      
      <Grid className='space-y-5' container>
        {order.order?.orderItems.map((item) => (
        <Grid 
          item 
          container 
          className='shadow-xl rounded-md p-5 border' 
          sx={{alignItems:"center", justifyContent:"space-between"}}>

       
      <Grid item xs={6}>
        {" "}
        <div className='flex items-center space-x-4'>
          <img className='w-[5rem h-[5rem] object-cover object-top ' 
          // src='https://rukminim1.flixcart.com/image/612/612/xif0q/dress/z/s/i/s-a1-zwerlon-original-imagn9uycxbhshur.jpeg?q=70' 
          src={item?.product.imageUrl}
          alt='' />
          <div>
            <p className='space-y-2 ml-5 font-semibold'>{item.product.title}</p>
            <p className='space-x-5 opacity-50 text-xs font-semibold'> 
              <span>Color: {item.color}</span>
              <span>Size: {item.size}</span>
            </p>
            <p className='opacity-70 text-sm'>Seller: {item.product.brand}</p>
            <p className=''>₹ {item.price} </p>
          </div>
        </div>
      </Grid>

      <Grid item>
        {
          <Box sx={{color:deepPurple[500] }}
          onClick={() => navigate(`/account/rate/${item.product.id}`)}
          className="flex items-center cursor-pointer"
          >
          <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'/>
          <span>Rate and Review Product</span>
          </Box>
        }
        
      </Grid>
      </Grid> ))}
              
      </Grid>
    </div>
        )
    };

export default OrderDetails