import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';
import { useNavigate } from 'react-router-dom';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

//const items = [
    // <div className="item" data-value="1">1</div>,
    // <div className="item" data-value="2">2</div>,
    // <div className="item" data-value="3">3</div>,
    // <div className="item" data-value="4">4</div>,
    // <div className="item" data-value="5">5</div>,
    
//];
const handleDragStart = (e) => e.preventDefault();

const MainCarousel = () => {
    const  navigate=useNavigate();
    const item = MainCarouselData.map((item)=> ( 
        <img 
            className='cursor-pointer -z-10'
            onClick={()=> navigate(item.path)}    
            src={item.image} 
            alt=''  
            role='presentation'
            onDragStart={handleDragStart}
        />
    ));
    return(
        <AliceCarousel
        
        items={item}
        autoPlay={true}
        autoPlayInterval={2500}
        infinite
        disableButtonsControls
        // mouseTracking
        // responsive={responsive}
        //controlsStrategy="alternate"
    />
    );
}

export default MainCarousel;