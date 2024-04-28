import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthlyOverview from './MonthlyOverview'
import ProductTableView from '../View/ProductTableView'
import OrderTableView from '../View/OrderTableView'

const AdminDashBoard = () => {
  return (
    <div className='p-10'>

       <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg shadow-gray-600' >
            <Achievement/>
          </div>
        </Grid>

        <Grid item xs={12} md={8} >
         <div className='shadow-lg shadow-gray-600'>
          <MonthlyOverview/>
         </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <ProductTableView/>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <OrderTableView/>
          </div>
        </Grid>
       </Grid>

    </div>
  )
}

export default AdminDashBoard;
