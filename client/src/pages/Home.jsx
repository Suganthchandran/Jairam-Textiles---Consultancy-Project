import React from 'react'
import Banner from '../components/Banner'
import Policy from '../components/Policy'
import Footer from '../components/Footer'
import HomeDetail1 from '../components/HomeDetail1'
import HomePageCards from '../components/HomePageCards'
import HomePageVariety from '../components/HomePageVariety'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomePageVariety/>
      <HomePageCards/>
      <HomeDetail1/>
      <Policy/>
      <Footer/>
    </div>
  )
}

export default Home
