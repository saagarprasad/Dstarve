import React, { useEffect, useState } from 'react';
import './Header.css';
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Signin from '../Body/Signin';
import { auth } from '../Body/Firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgProfile } from "react-icons/cg";
import { VscPreview } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';




const Header = ({ size }) => {

  const listdownnames = [
    {
      id: 1,
      name: 'Full meals'
    },
    {
      id: 2,
      name: 'Ice Cream'
    },
    {
      id: 3,
      name: 'Fast Foods'
    },
    {
      id: 4,
      name: 'Tandoori'
    },
    {
      id: 5,
      name: 'Desserts'
    }
  ]

  const [userDetails, setuserDetails] = useState('');

  const navigate = useNavigate();

  const fetchuserdetails = async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserDetails({
          name: user.displayName || "User",
          photo: user.photoURL || null,
        });
      } else {
        setuserDetails('');
      }
    });
  };


  const logout = () => {
    auth.signOut();
    console.log("User logged out");
    toast.success("User Logged out", {
      position: "top-center",
      toastId: "logout-toast", // Unique ID to allow repeated display
    });
    setuserDetails("");
  };


  useEffect(() => {
    fetchuserdetails();
  }, [])

  const handleClicktoCart = () => {
    navigate('/cartpage')
  }

  const handleClicktoHome = () => {
    navigate('/home')
  }

  const handleClicktodish = (dishname) => {
    navigate(`/dish/${dishname}`)
  }



  return (
    <div>
      {userDetails ? (
        <>
          <div className="Header">
            <h1 onClick={handleClicktoHome} className="Dstarve">Dstarve</h1>
            <div className="helements">
              <p onClick={handleClicktoHome}>Home</p>
              <div className="categories">
                <p>Categories</p> <MdKeyboardArrowDown className='downarrow' />
                <div className="dropdown">
                  <ul>
                    {listdownnames.map((item) => {
                      return (
                        <li key={item.id} onClick={() => handleClicktodish(item.name)}>
                          <IoMdArrowDropright /> {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <p>Orders</p>
              <p>Restaurants</p>
              <p onClick={() => navigate('/blog')}>Blog</p>
              <p>Contact us</p>
            </div>
            <div className="buttons">
              {size ? <button onClick={() => handleClicktoCart()} className="login" style={{ position: 'relative' }}><span className='cartnumber'>{size}</span><FaShoppingCart /> Cart</button> : <button onClick={() => handleClicktoCart()} className="login" style={{ position: 'relative' }}><FaShoppingCart /> Cart</button>}

              <div className="profile-pic">
                {userDetails?.photo ? (
                  <img
                    src={userDetails.photo}
                    alt="Profile"
                    width="40%"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                ) : (
                  <div className="default-profile-pic">
                    {userDetails?.name.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <div className="dropdown-menu">
                  <ul>
                    <li><CgProfile /> My Profile</li>
                    <li><VscPreview /> Reviews</li>
                    <li><IoSettingsOutline /> Settings</li>
                    <li onClick={logout}><BiLogOutCircle /> Log out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>) : (<div className="Header">
          <h1 className="Dstarve">Dstarve</h1>
          <div className="helements">
            <p>Home</p>
            <div className="categories">
              <p>Categories</p> <MdKeyboardArrowDown className='downarrow' />
              <div className="dropdown">
                <ul>
                  <li>
                    <IoMdArrowDropright /> Full Meals
                  </li>
                  <li>
                    <IoMdArrowDropright /> Ice Cream
                  </li>
                  <li>
                    <IoMdArrowDropright /> Fast Foods
                  </li>
                  <li>
                    <IoMdArrowDropright /> Biriyani
                  </li>
                  <li>
                    <IoMdArrowDropright /> Tandoori
                  </li>
                  <li>
                    <IoMdArrowDropright /> Desserts
                  </li>
                </ul>
              </div>
            </div>
            <p>Orders</p>
            <p>Restaurants</p>
            <p>Blog</p>
            <p>Contact us</p>
          </div>
          <div className="buttons">
            <button className="login"><FaShoppingCart /> Cart</button>
            <Signin />
          </div>
        </div>)};
    </div>
  );
}

export default Header;
