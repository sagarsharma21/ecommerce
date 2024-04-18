import React from 'react'

const AddressCard = ({ address }) => {
  return (
    
     <div>
        {/* <div className='space-y-3'>
          <p className='font-semibold'>Rohan Sharma</p>
          <p>Jalandhar, Punjab, 144401</p>
          <div className='space-y-3'>
            <p className='font-semibold'>Phone Number</p>
            <p className=' '>9968259937</p>
          </div>
        </div> */}

        <div className='space-y-3'>
          <p className='font-semibold'>{`${address?.firstName} ${address?.lastName}`}</p>
          {/* <p>{`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}</p> */}
          <p className='font-serif from-stone-800'>{address?.streetAddress}</p> 
          <p className='font-serif from-stone-800'>City- {address?.city}</p> 
          <p className='font-serif from-stone-800'>State- {address?.state}</p>
          <p className='font-serif from-stone-800'>PIN Code- {address?.zipCode}</p>
          <div className='space-y-3'>
            <p className='font-semibold'>Phone Number</p>
            <p className='font-serif from-stone-800'>{address?.mobile}</p>
          </div>
        </div>
      </div>
    
  )
}

export default AddressCard;