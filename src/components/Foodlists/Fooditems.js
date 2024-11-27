import React from 'react'
import './Fooditems.css'
import { PiCookingPotBold } from "react-icons/pi";
import data from '../Body/data';
import Cards from './Cards';
import { useParams } from 'react-router-dom';


const Fooditems = ({ handleClicknumbertocart }) => {

    const { icecreamdata, Chickenbiriyanidata, vegMealsData, fastFoodData, Tandooridata, DessertsData, SquidFoodData } = data;

    const { dishname } = useParams();

    const getMenu = () => {
        switch (dishname.toLowerCase()) {
            case 'biriyani':
                return Chickenbiriyanidata
            case 'full meals':
                return vegMealsData
            case 'ice cream':
                return icecreamdata
            case 'fast foods':
                return fastFoodData
            case 'tandoori':
                return Tandooridata
            case 'desserts':
                return DessertsData
            case 'squid deep fry':
                return SquidFoodData
        }
    }

    const getDishTitle = () => {
        switch (dishname.toLowerCase()) {
            case 'biriyani':
                return 'Chicken Biriyani';
            case 'full meals':
                return 'Veg Full Meals';
            case 'ice cream':
                return 'Ice Creams';
            case 'fast foods':
                return 'Fast Foods';
            case 'tandoori':
                return "Tandoori Chicken"
            case 'desserts':
                return "Desserts"
            case 'squid deep fry':
                return "Squid Fries"
            default:
                return 'Menu';

        }
    }

    const menucard = getMenu()

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
                <h1 className='text1'>{getDishTitle()}</h1>
                {menucard.map((item) => {
                    return <Cards handleClicknumbertocart={handleClicknumbertocart} key={item.id} item={item} />
                })}
            </section>
            <br></br><br></br>

        </>
    )
}

export default Fooditems