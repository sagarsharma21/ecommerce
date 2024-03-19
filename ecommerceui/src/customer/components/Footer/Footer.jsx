import React from 'react'
import { Grid, Typography, Button, Link } from '@mui/material'

const Footer = () => {
  return (
    <div>
      This is your footer
      <Grid className='bg-black text-white text-center mt-10'
      container
      sx={{bgcolor:"black", color:"white", py:3}}
      >
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6'>Company</Typography>
          <Typography className='pb-5' variant='h6'>About</Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Blog</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Press</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Partners</Button>
          </div>
      
        </Grid>
        {/* 2nd grid */}
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6'>Solutions</Typography>
          <Typography className='pb-5' variant='h6'>About</Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Marketing</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Analytics</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Commerce</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Insights</Button>
          </div>
      
        </Grid>
        {/* 3rd grid */}
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6'>Documentation</Typography>
          <Typography className='pb-5' variant='h6'>About</Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Guides</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >API Status</Button>
          </div>

          {/* <div>
            <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Partners</Button>
          </div> */}
      
        </Grid>
        {/* 4th grid */}
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6'>Legal</Typography>
          <Typography className='pb-5' variant='h6'>About</Typography>
          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Claim</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Privacy</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Terms</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Report</Button>
          </div>
      
        </Grid>

{/* FooterNote */}
        <Grid className='pt-20' item xs={12} >
          <Typography variant='body2' component='p' align='center' >
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant='body2' component='p' align='center' >
            Made with love by me.
          </Typography>
          <Typography variant='body2' component='p' align='center' >
            Icons made by {' '}
            <Link href="https://www.freepik.com" target="_blank" color="inherit" underline='always'>
              Freepik
            </Link>{' '}
            from {' '}
            <Link href="https://www.flaticon.com" target="_blank" color="inherit" underline='always'>
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>

      </Grid>
    </div>
  )
}

export default Footer;