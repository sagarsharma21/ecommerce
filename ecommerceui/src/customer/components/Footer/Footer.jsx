import React from 'react'
import { Grid, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <div>
      {/* This is your footer */}
      <Grid className='bg-black text-white text-center mt-10'
      container
      sx={{bgcolor:"black", color:"white", py:3}}
      >
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6' gutterBottom>
            Company
          </Typography>
          <Typography component='p' variant='body2' gutterBottom>
            About
          </Typography>
          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Blog
            </Typography>
          </div>

          {/* <div>
            <Typography component='p' variant='body2' gutterBottom >
              Press
            </Typography>
          </div> */}

          {/* <div>
            <Typography component='p' variant='body2' gutterBottom >
              Jobs
            </Typography>
          </div>

          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Partners
            </Typography>
          </div> */}
      
        </Grid>
        {/* 2nd grid */}
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6' gutterBottom>
            Solutions
          </Typography>
          
          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Marketing
            </Typography>
          </div>

          {/* <div>
            <Typography component='p' variant='body2' gutterBottom >
              Analytics
            </Typography>
          </div> */}

          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Commerce
            </Typography>
          </div>

          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Insights
            </Typography>
          </div>
      
        </Grid>
        {/* 3rd grid */}
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6'>
            Documentation
          </Typography>
          <Typography component='p' variant='body2'>
            About
          </Typography>
          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Guides
            </Typography>
          </div>

          {/* <div>
            <Typography component='p' variant='body2' gutterBottom >
              API Status
            </Typography>
          </div> */}

          {/* <div>
            <Button className='pb-5' variant='h6' gutterBottom >Jobs</Button>
          </div>

          <div>
            <Button className='pb-5' variant='h6' gutterBottom >Partners</Button>
          </div> */}
      
        </Grid>
        {/* 4th grid */}
        <Grid item xs={12} sm={6} md={3} >

          <Typography className='pb-5' variant='h6'>About</Typography>
          <Typography component='p' variant='body2'>Legal</Typography>
          {/* <div>
            <Typography component='p' variant='body2' gutterBottom >
              Claim
            </Typography>
          </div> */}

          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Privacy
            </Typography>
          </div>

          <div>
            <Typography component='p' variant='body2' gutterBottom >
              Terms
            </Typography>
          </div>

          {/* <div>
            <Typography component='p' variant='body2' gutterBottom >
              Report
            </Typography>
          </div> */}
      
        </Grid>

{/* FooterNote */}
        <Grid className='pt-5' item xs={12} >
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