import React from 'react'
import './Body.css';





const Body = () => {
  return (
    <>
      <div className='body'>
        <p className='tagline'>Don't starve, Get the food at your <br></br>home door asap! 😊</p>
        <div className='search'>
          <input className='searchBox' type="text" placeholder='Search for Dishes' />
          <button className='searchbtn'>Search</button>
        </div>
      </div>

      <div>
        <p className='wm'>What's on your mind?</p>
      </div>

    </>
  );
}

export default Body