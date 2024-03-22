import React from 'react';
import {Grid, Review, Rating, Box, Avatar} from '@mui/material'

const ProductReviewCard = () => {
  return (
    <div>
        {/* ProductReviewCard */}
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white"
                    sx={{width:56, height:56,bgcolor:"#9155fd"}}
                    >RS

                    </Avatar>
                </Box>
            </Grid>
            <Grid item xs={9} >
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Rohan S</p>
                        <p className='opacity-70'>April 2, 2020 </p>
                    </div>

                </div>

                <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident qui ipsam vero beatae adipisci culpa maxime obcaecati sapiente assumenda, saepe quisquam, voluptatem non dolor amet fugit! Sint, hic ipsa!</p>
                {/* <Review></Review> */}

            </Grid>

        </Grid>
    </div>
  )
}

export default ProductReviewCard