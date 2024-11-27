import React, { useState } from 'react'
import './Body.css';
import { useNavigate } from 'react-router-dom';


const Body = () => {

  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handlesearchdishname = (dishname) =>{
    navigate(`/dish/${dishname}`)
  }

  return (
    <>
      <div className='body'>
        <p className='tagline'>Don't starve, Get the food at your <br></br>home door asap! 😊</p>
        <div className='search'>
          <input
            className='searchBox'
            type="text"
            placeholder='Search for Dishes'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={() => handlesearchdishname(search)} className='searchbtn'>Search</button>
        </div>
      </div>

      <div>
        <p className='wm'>What's on your mind?</p>
      </div>

    </>
  );
}

export default Body