import React from 'react'
import './Footer.css'
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <div className='footer-div'>
                <div className='footer-heading'>
                    <h1 className='dstarve'>Dstarve</h1>
                    <p className='cc'>© Copyright 2024</p>
                </div>
                <div className='head-elements'>
                    <div>
                        <p className='textdecor'>Company</p><br></br>
                        <div className='space-elements'>
                            <p className='opa'>About us</p>
                            <p className='opa'>Career</p>
                            <p className='opa'>Team</p>
                            <p className='opa'>Opportunities</p>
                            <p className='opa'>Blog</p>
                            <p className='opa'>Work with us</p>
                        </div>
                    </div>

                    <div>
                        <p className='textdecor'>Contact us</p><br></br>
                        <div className='space-elements'>
                            <p className='opa'>Help and Support</p>
                            <p className='opa'>Partner with us</p>
                            <p className='opa'>Write email to us</p>
                        </div>
                    </div>

                    <div>
                        <p className='textdecor'>Learn more</p><br></br>
                        <div className='space-elements'>
                            <p className='opa'>Terms and Conditions</p>
                            <p className='opa'>Privacy policy</p>
                            <p className='opa'>Cookies policy</p>
                        </div>
                    </div>

                    <div>
                        <p className='textdecor'>Social Media Links</p><br></br>
                        <div className='sl'>
                            <IoLogoFacebook />
                            <FaSquareXTwitter />
                            <FaSquareInstagram />
                            <FaLinkedin />
                            <IoLogoYoutube />
                        </div>
                    </div>
                </div>
            </div><br></br>
            <div className='below-footer'>
                <p className='block'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2024 © Dstarve™ Ltd. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer