// import React from 'react'
// import MainCarousel from '../../components/HomeCarousel/MainCarousel'
// import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
// import { mens_kurta } from '../../../Data/Men/mens_kurta'

// const HomePage = () => {
//   return (
//     <div>HomePage
//         <MainCarousel/>

//         <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
//           HomeSectionCarousel
//           <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
//           <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
//           <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
//           <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
//           <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
//           <HomeSectionCarousel data={mens_kurta} />
//           <HomeSectionCarousel data={mens_kurta} />
          
//         </div>

//     </div>
//   )
// }

// export default HomePage;
import React from "react";
import MainCarousel from "../../components/MainCarousel/MainCarousel"; 
import { MainCarouselData } from "../../components/MainCarousel/MainCarouselData"; 
import HomeProductSection from "../../../customer/components/HomeSectionCard/HomeProductSection";
import { sareePage1 } from "../../../Data/Saree/page1"; 
import { dressPage1 } from "../../../Data/Dress/page1";
import { gownsPage1 } from "../../../Data/Gowns/gowns";
//import {kurta}
import { mensShoesPage1 } from "../../../Data/Shoes/Shoes";
import { mens_kurta } from "../../../Data/Men/mens_kurta";
import { lehenga_page1 } from "../../../Data/Women/LehengaCholi";
import { ladies_kurta } from "../../../Data/Women/ladies_kurta"; 
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {

    return(
        <div className="">
            <MainCarousel images={MainCarouselData} />

            <div className="space-y-10 py-20">
            {/* <HomeProductSection data={mens_kurta} sectionName={"Men's Kurta"} />
            <HomeProductSection data={mensShoesPage1} sectionName={"Men's Shoes"} />
            <HomeProductSection data={lehenga_page1} sectionName={"Lehenga Choli"} />
            <HomeProductSection data={sareePage1} sectionName={"Saree"} />
            <HomeProductSection data={dressPage1} sectionName={"Dress"} />
            <HomeProductSection data={gownsPage1} sectionName={"Women's Gowns"} />
            <HomeProductSection data={ladies_kurta} sectionName={"Women's Kurta"} /> */}
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
            <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"} />
            <HomeSectionCarousel data={lehenga_page1} sectionName={"Lehenga Choli"} />
            <HomeSectionCarousel data={sareePage1} sectionName={"Saree"} />
            <HomeSectionCarousel data={dressPage1} sectionName={"Dress"} />
            <HomeSectionCarousel data={gownsPage1} sectionName={"Women's Gowns"} />
            <HomeSectionCarousel data={ladies_kurta} sectionName={"Women's Kurta"} />


        </div>
        
        </div>
    );
};
export default HomePage;