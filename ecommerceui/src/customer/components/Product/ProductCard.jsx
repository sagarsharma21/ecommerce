import React from 'react'
import  './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`/product/${'ega'}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer ' >
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
        <img className='h-full w-full object-cover object-left-top ' src={product.imageUrl} alt='' />
      </div>

      <div className='productText bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        
        <div className=' '>  
          <p className='font-semibold opacity-100'>₹{product.discountedPrice}</p>
          <p className='line-through opacity-60'>₹{product.price}</p>
          <p className='font-semibold text-green-600'>{product.discountPercent}% off</p>
        </div>
        
      </div>
    </div>

    
  )
}

export default ProductCard