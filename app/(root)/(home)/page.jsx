import Bestsellers from '@/components/shared/bestsellers'
import Categories from '@/components/shared/categories'
import Hero from '@/components/shared/hero'
import HomeTechnology from '@/components/shared/homeTechnology'
import HeroSwiper from '@/components/shared/swiper'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <HeroSwiper />
        <Categories />
        <Bestsellers />
        <HomeTechnology />
    </div>
  )
}

export default HomePage