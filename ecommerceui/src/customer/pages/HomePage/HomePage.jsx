import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>HomePage
        <MainCarousel/>

        <div className='space-y-10 py-20 flex flex-col justify-center'>
          HomeSectionCarousel
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
          <HomeSectionCarousel/>
        </div>

    </div>
  )
}

export default HomePage;
