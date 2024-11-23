import React from 'react';
import './Getapp.css';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from 'react-icons/fa';


const Getapp = () => {
    return (
        <>
            <div className="getapp">
                {/* Phone Container */}
                <div className="phone-container">
                    <img className="phone1" src="/mobileapp/img2.png" alt="Phone Preview" />
                    <img className="phone2" src="/mobileapp/img1.png" alt="Phone Preview" />
                </div>

                {/* Text Content */}
                <div className="text-content">
                    <h2 className="get">Get the Dstarve app now 😋</h2>
                    <p className="text">
                        We will send you a link, open it on your phone to download the app
                    </p>
                    <form className="emailform">
                        <div className="buttonsake">
                            <input
                                className="inputbox"
                                type="text"
                                placeholder="Type your email address"
                            />
                            <button className="sbutton">Submit</button>
                        </div>
                    </form>
                    <div className='dbutton'>
                        <br></br><p className='download'>Download app from</p>
                        <div className='dbuttons'>
                            <button><img src="/mobileapp/Play Store.png" alt="" /> Play store</button>
                            <button><FaApple /> App Store</button>
                        </div>
                    </div>
                </div>
            </div><br></br><br></br><br></br><br></br></>
    );
};

export default Getapp;
