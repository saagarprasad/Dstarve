import React, { useEffect, useState } from 'react'
import './CartPage.css'
import { MdDeleteForever } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";




const CartPage = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => {
            ans = ans + item.quantity * item.price;
        })
        setPrice(ans)
    }

    useEffect(() => {
        handlePrice();
    })


    return (
        <>
            <div className='wholemodule'>
                <div className='headings-list' >
                    {price ? <h1 style={{ fontWeight: "500", marginBottom: "50px", marginLeft: "40px" }}>Food Cart</h1> : <h1 style={{ fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "300px" }}>Your Food Cart is empty.☹️</h1>}
                    {cart.map((item) => {
                        return (
                            <div className='cart-ul' key={item.id}>
                                <div className='individualimgitems'>
                                    <img className='cart-images' src={item.image} alt="" />
                                </div>
                                <div className='inbetween'>
                                    <div className='upanddowndatas'>
                                        <div className='individualitems'>
                                            <p className='dishnamestyle'>{item.dishname}(1kg)</p>
                                            <p className='loweropa'>{item.cartdatas}</p>
                                            <h3 className='offer'><BiSolidOffer size={20} />40% OFF upto ₹70</h3>
                                        </div>
                                        <div className='quantityitemsdump'>
                                            <p className='quantityvalue'>Quantity: <button onClick={() => handleChange(item, -1)} className='quantitybtn'> - </button> <button className='quantitykilmabtn'> {item.quantity}</button><button onClick={() => handleChange(item, +1)} className='quantitybtn'> + </button></p>
                                            <p onClick={() => { handleRemove(item.id) }} className='deletebtn'><MdDeleteForever size={30} /></p>

                                        </div>
                                    </div>
                                    <div className='upanddown'>
                                        <div className='individualitems'>
                                            <h1 className='ptexts'>₹{item.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className='sidecartpage'>
                    <h2 className='totaltext'>Subtotal: ₹{price}</h2>
                    {price ?<button className='lightingbtn'>Proceed to Checkout</button>: <button className='nonlightingbtn'>Proceed to Checkout</button>}
                </div>
            </div>

            {price ? <h2 className='subtotal'>Subtotal: ₹{price}</h2> : <h3 className='emptycart'>Go and grab some foods!!😋</h3>}
            <br></br><br></br><br></br><br></br>
        </>
    )
}

export default CartPage