import React from 'react'
import { Button, IconButton } from '@mui/material'
import  AddCircleOutlineIcon  from  '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>CartItem
        
        <div className='flex items-center'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                <img className='w-full h-full object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70' alt=''/>
            </div>

            <div className='ml-5 space-y-1'>
                
                <p className='font-semibold '>Women Silk Black Border Saree</p>
                <p className='opacity-70'>Size: S, M, L</p>
                <p className='opacity-70 mt-2'>Seller: Cristen Fashion</p>
               
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold'>₹1999</p>
                    <p className='opacity-60 line-through'>₹3300</p>
                    <p className='text-green-600 font font-semibold'>60% Off</p>  
                </div>
                
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>

            <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>3 </span>
                    <IconButton sx={{color:"RGB(145 85 250)"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
            </div>

            <div>
            <Button sx={{color:"RGB(145 85 250)"}}>Remove</Button> 
            </div>
            
        </div>
    </div>
    
  )
}

export default CartItem