import React from 'react'
import  './ProductCard.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  
  const { title, brand, imageUrl, price, discountedPrice, color, discountPercent } = product;
  const navigate = useNavigate();
  
  console.log("product ", product);

  const handleNavigate = () => {
    navigate(`/product/${product?.id || product?._id || 2}`)
  }

  return (
    <div onClick={handleNavigate} className='productCard w-[15rem] m-3 transition-all cursor-pointer ' >
      {/* Demo Product Card }
      <div className='h-[20rem] '>
        <img className='h-full w-full object-cover object-left-top ' src='https://rukminim1.flixcart.com/image/612/612/kdlzte80/ethnic-set/p/f/q/l-3209-mint-02-neysa-original-imafuh85unfjczkd.jpeg?q=70' alt='' />
      </div>

      <div className='productText bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>Universal</p>
          <p>Casual Puff Sleeves Solid Women White Top</p>
        </div>
        
        <div className=' '>  
          <p className='font-semibold opacity-100'>₹299</p>
          <p className='line-through opacity-60'>₹899</p>
          <p className='font-semibold text-green-600'>60% off</p>
        </div>
       
      </div>
      { Demo Product Card */}

      <div className='h-[20rem] '>
        <img className='h-full w-full object-cover object-left-top ' src={imageUrl} alt='' />
      </div>

      <div className='productText bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{brand}</p>
          <p className=''>{title}</p>
          <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>  
          <p className='font-semibold opacity-100'>₹{discountedPrice}</p>
          <p className='line-through opacity-60'>₹{price}</p>
          <p className='font-semibold text-green-600'>{discountPercent}% off</p>
        </div>
        
      </div>
    </div>

    
  );
};

export default ProductCard;