import Bestsellers from '@/components/shared/bestsellers'
import Brands from '@/components/shared/brands'
import Buyers from '@/components/shared/buyers'
import Categories from '@/components/shared/categories'
import Hero from '@/components/shared/hero'
import HomeTechnology from '@/components/shared/homeTechnology'
import Mobile from '@/components/shared/mobile'
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
        <Buyers />
        <Brands />
        <Mobile />
    </div>
  )
}

export default HomePage