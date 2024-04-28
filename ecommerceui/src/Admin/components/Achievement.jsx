// import { Style } from "@mui/icons-material";
import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

// Styled component for the triangle shaped bg image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
});

// Styled component for the trophy image 
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
});

const Achievement = () => {
  return (
    <div>
      <Card  className=''sx={{ position: 'relative' ,bgcolor:'black',color:"white"}}>
        <CardContent>
          <Typography variant="h6" sx={{ letterSpacing: '0.25px' }}>
            Shop
          </Typography>
          <Typography variant='body2'>Congratulations 🥳🎉 </Typography>

          <Typography variant ='h5' sx={{my:3.1, color:'primary.main'}} >420.8k</Typography>
          <Button size="small" variant="contained">
            View Sales
          </Button>
          {/* <TriangleImg src={`/images/misc/${imageSrc}`}>  </TriangleImg>    */}
          <TrophyImg src="https://img.freepik.com/premium-photo/gold-trophy-cup-black-background_483949-5540.jpg " />
        </CardContent>
      </Card>
    </div>
  );
};

export default Achievement;
