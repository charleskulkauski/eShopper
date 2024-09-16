import React from 'react'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import SeactionHeading from './components/Sections/SectionsHeading/SeactionHeading'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'

const eShopper = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title+index} {...item} />)}
    </>
  )
}

export default eShopper
