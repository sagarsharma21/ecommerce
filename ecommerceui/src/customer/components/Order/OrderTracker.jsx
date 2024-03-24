import React from 'react'
import { Step, Stepper, StepLabel } from '@mui/material'
// import  StepLabel

const steps= [
    "Order Placed", "Order Confirmed", "Shipped", "Out for Delivery", "Delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div>OrderTracker
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => 
                  <Step>
                    <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}
                    </StepLabel>
                  </Step>  )}
            </Stepper>
        </div>
    </div>
  )
}

export default OrderTracker