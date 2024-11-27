import React from 'react'
import './Cards.css'


const Cards = ({ item, handleClicknumbertocart }) => {

    const { Restname, datas, price, about, image } = item;



    return (
        <>
            <div className='list-items'>
                <div className='justimage'>
                    <img className='images' src={image} />
                </div>
                <div className='content'>
                    <h5 className='dish-name'>{Restname}</h5>
                    <p>{datas}</p>
                    <h2>₹{price}</h2>
                    <p>{about}</p>
                </div>
                <div className='button'>
                    <button onClick={() => { handleClicknumbertocart(item) }} className='cartbtn'>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Cards