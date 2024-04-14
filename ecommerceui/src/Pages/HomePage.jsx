import React from "react";
import MainCarousel from "../customer/components/HomeCarousel/MainCarousel";
import { MainCarouselData } from "../customer/components/HomeCarousel/MainCarouselData";
import HomeProductSection from "../customer/components/HomeSectionCard/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/Dress/page1";
import { gownsPage1 } from "../Data/Gowns/gowns";
//import {kurta}
import { mensShoesPage1 } from "../Data/Shoes";
import { mens_kurta } from "../Data/Men/mens_kurta";
import { lehenga_page1 } from "../Data/Women/LehengaCholi";
import { ladies_kurta } from "../Data/Women/ladies_kurta"; 

const HomePage = () => {

    return(
        <div className="">
            <MainCarousel images={MainCarouselData} />

            <div className="space-y-10 py-20">
            <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
            <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
            <HomeProductSection data={lehenga_page1} section={"Lehenga Choli"} />
            <HomeProductSection data={sareePage1} section={"Saree"} />
            <HomeProductSection data={dressPage1} section={"Dress"} />
            <HomeProductSection data={gownsPage1} section={"Women's Gowns"} />
            <HomeProductSection data={ladies_kurta} section={"Women's Kurta"} />

        </div>
        
        </div>
    );
};
export default HomePage;