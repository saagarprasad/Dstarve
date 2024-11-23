import React from 'react'
import './Fooditems.css'
import { PiCookingPotBold } from "react-icons/pi";
import lists from '../Body/data';
import Cards from './Cards';


const Fooditems = ({handleClicknumbertocart}) => {
    return (
        <>
            <div className='sidebar-fi'>
                <h2 className='heading-fi'>Menus</h2>
                <ul className='ul-fi'>
                    <h3>Veg Biriyani's</h3>
                    <li><PiCookingPotBold />  Plain Vegetable Biriyani</li>
                    <li><PiCookingPotBold />  Mushroom Biriyani</li>
                    <li><PiCookingPotBold />  Panner Biriyani</li>
                    <li><PiCookingPotBold />  Cauliflower Biriyani</li>
                    <li><PiCookingPotBold />  Mushroom Biriyani</li>
                    <li><PiCookingPotBold />  Panner Biriyani</li>
                    <li><PiCookingPotBold />  Cauliflower Biriyani</li>
                </ul>
                <ul className='ul-fi'>
                    <h3>Non-Veg Biriyani's</h3>
                    <li><PiCookingPotBold />  Chicken Vegetable Biriyani</li>
                    <li><PiCookingPotBold />  Mutton Biriyani</li>
                    <li><PiCookingPotBold />  Beef Biriyani</li>
                    <li><PiCookingPotBold />  Lagan Chicken Biriyani</li>
                </ul>
                <ul className='ul-fi'>
                    <h3>Egg Biriyani's</h3>
                    <li><PiCookingPotBold />  Plain Vegetable Biriyani</li>
                    <li><PiCookingPotBold />  Mushroom Biriyani</li>
                    <li><PiCookingPotBold />  Panner Biriyani</li>
                    <li><PiCookingPotBold />  Cauliflower Biriyani</li>
                    <li><PiCookingPotBold />  Mushroom Biriyani</li>
                    <li><PiCookingPotBold />  Panner Biriyani</li>
                    <li><PiCookingPotBold />  Cauliflower Biriyani</li>
                </ul>
                <ul className='ul-fi'>
                    <h3>Non-Veg Starter's</h3>
                    <li><PiCookingPotBold />  Chicken Pepper</li>
                    <li><PiCookingPotBold />  Butter Chicken</li>
                    <li><PiCookingPotBold />  Chicken Manchurian</li>
                    <li><PiCookingPotBold />  Kadai Chicken</li>
                </ul>
            </div>


            <section>
                <h1 className='text1'>Chicken Biriyani </h1>
                {lists.map((item) => {
                    return <Cards handleClicknumbertocart ={handleClicknumbertocart} key={item.id} item={item} />
                })}
            </section>
            <br></br><br></br>

        </>
    )
}

export default Fooditems