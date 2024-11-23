import React from 'react'
import Header from '../Header/Header.js'
import Body from './Body'
import FoodCard from './FoodCard'
import { Restaurants } from './Restaurants'
import City from './City'
import Getapp from './Getapp'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Body />
            <FoodCard />
            <Restaurants />
            <City />
            <Getapp />
            <Footer />
        </>
    )
}

export default Home