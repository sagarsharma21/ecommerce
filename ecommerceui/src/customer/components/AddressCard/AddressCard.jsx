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
          <p>{`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}</p>
          <div className='space-y-3'>
            <p className='font-semibold'>Phone Number</p>
            <p className=' '>{address?.mobile}</p>
          </div>
        </div>
      </div>
    
  )
}

export default AddressCard;