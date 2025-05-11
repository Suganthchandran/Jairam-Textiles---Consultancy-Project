import React from 'react'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
    </div>
  )
}

export default Home
