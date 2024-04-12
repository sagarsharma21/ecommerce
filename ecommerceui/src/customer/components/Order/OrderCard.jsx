import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust'
import StarIcon from '@mui/icons-material/Star'
import { useNavigate } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const OrderCard = ({ item, order }) => {
    const navigate=useNavigate();
    console.log("items ", item, order, order.orderStatus);

  return (
    <div onClick={()=>navigate(`/account/order/${order?.id}`)} className='p-5 shadow-lg shadow-gray hover:shadow-2xl border '>
        {/* OrderCard */}
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top ' 
                    // src='https://rukminim1.flixcart.com/image/612/612/xif0q/dress/z/s/i/s-a1-zwerlon-original-imagn9uycxbhshur.jpeg?q=70' 
                    src={item?.product.imageUrl}
                    alt='' />
                   
                    <div className='ml-5 space-y-2'>
                        <p className='mb-2'>{item?.product.title}</p>
                        <p className='opacity-60 text-xs font-semibold'>Size: {item?.size}</p>
                        <p className='opacity-60 text-xs font-semibold'>Color: {item?.color}</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹{item?.price}</p>
            </Grid>

            <Grid item xs={4}>
                <p className='space-y-2 font-semibold'>
                    {order?.orderStatus === "DELIVERED" ? (
                        <>
                            <FiberManualRecordIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Delivered on Mar 03</span>
                        </>
                    ) : <>
                        <AdjustIcon
                            sx={{ width: "15px", height:"15px" }}
                            className='text-green-600 p-0 mr-2 text-sm'
                        />
                        <span>Expected Delivery on Mar 03</span>
                    </> }
                </p>

                <p>
                    <p className='text-xs'>Your item has been delivered!</p>
                    {item.orderStatus === "DELIVERED" && (
                        <div
                        onClick={() => navigate(`/account/rate/{id}`)}
                        className='flex items-center texxt-blue-600 cursor-pointer'
                        >
                            <StarIcon sx={{ fontsize: "2rem" }} className="px-2 text-5xl" />
                            <span>Rate and Review Product</span>
                        </div>
                    ) }
                </p>
            </Grid>
            {/* <Grid item xs={4}>
               {true && <div>
                <p>
                <AdjustIcon sx={{width:"15 px", height:"15px"}} className='text-green-600 mr-2 text-sm' />
                    <span>
                        Delivered on March 03
                    </span>
                </p>
                <p className='text-xs'>
                    Your item has been delivered!
                </p>
               </div> }
                {false && <p>
                    <span>
                        Expected Delivery on Mar 03
                    </span>
                </p>}
            </Grid> */}
        </Grid>
    </div>
  )
}

export default OrderCard;