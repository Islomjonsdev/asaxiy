import Categories from '@/components/shared/categories'
import Hero from '@/components/shared/hero'
import HeroSwiper from '@/components/shared/swiper'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <HeroSwiper />
        <Categories />
    </div>
  )
}

export default HomePage