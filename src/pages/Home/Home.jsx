import React, { useState } from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'

const Home = () => {

  const[category,setCategory]=useState("All")

  return (
    <div>
      <Banner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home