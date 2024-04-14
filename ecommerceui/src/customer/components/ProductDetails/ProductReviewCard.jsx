import React, { useState } from 'react';
import {Grid, Review, Rating, Box, Avatar} from '@mui/material'

const ProductReviewCard = ({ item }) => {
  
    const [value, setValue] = useState(4.5); 

    return (
    <div>
        {/* ProductReviewCard */}
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white"
                    sx={{width:56, height:56,bgcolor:"#9155fd"}}
                    alt={item.user.firstName}
                    >RS {item.user.firstName[0].toUpperCase()}
                    
                    </Avatar>
                </Box>
            </Grid>
            <Grid item xs={9} >
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>{item.user.firstName}</p>
                        <p className='opacity-70'>April 2, 2020 </p>
                    </div>

                </div>

                <Rating 
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }} 
                    name="half-rating" 
                    readOnly 
                    precision={0.5} 
                />
                {/* <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident qui ipsam vero beatae adipisci culpa maxime obcaecati sapiente assumenda, saepe quisquam, voluptatem non dolor amet fugit! Sint, hic ipsa!</p> */}
                {/* <Review></Review> */}
                    <div>
                        <p>{item.review} </p>
                    </div>
            </Grid>

        </Grid>
        <div className='col-span-1 flex'></div>
    </div>
  );
};

export default ProductReviewCard;