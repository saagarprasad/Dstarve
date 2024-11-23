// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './FoodCard.css';
// import { FaArrowCircleLeft } from "react-icons/fa";
// import { FaArrowCircleRight } from "react-icons/fa";



// function FoodCard() {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     prevArrow: <FaArrowCircleLeft />,
//     nextArrow: <FaArrowCircleRight />
//   };

//   const foodlist = [
//     {
//       id: 1,
//       name: 'Biriyani',
//       image: '/foodimages/biriyani.jpg',
//     },
//     {
//       id: 2,
//       name: 'Ice Cream',
//       image: '/foodimages/icecream.jpg',
//     },
//     {
//       id: 3,
//       name: 'Squid deep fry',
//       image: '/foodimages/squid.jpg',
//     },
//     {
//       id: 4,
//       name: 'Tandoori',
//       image: '/foodimages/tandoori.jpg',
//     },
//     {
//       id: 5,
//       name: 'Gulab Jamun',
//       image: '/foodimages/gulab.jpg',
//     },
//     {
//       id: 6,
//       name: 'Mexican Foods',
//       image: '/foodimages/mexican.jpg',
//     },
//     {
//       id: 7,
//       name: 'Korean Noodles',
//       image: '/foodimages/noodles.jpg',
//     },
//     {
//       id: 8,
//       name: 'Fish Fry',
//       image: '/foodimages/fish.jpg',
//     },
//     {
//       id: 9,
//       name: 'Fried rice',
//       image: '/foodimages/friedrice.jpg',
//     },
//     {
//       id: 10,
//       name: 'Prawn fry',
//       image: '/foodimages/prawn.jpg',
//     },
//     {
//       id: 11,
//       name: 'Desserts',
//       image: '/foodimages/desserts.jpg',
//     },
//     {
//       id: 12,
//       name: 'Meals',
//       image: '/foodimages/meals.jpg',
//     }

//   ];

//   return (
//     <>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {foodlist.map((item) => (
//             <div key={item.id} className="food-card">
//               <img src={item.image} alt={item.name} />
//               <h2 className='food-names'>{item.name}</h2>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default FoodCard;


import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FoodCard.css';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import db from "./Firebase";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


function FoodCard() {

  const [foodlist, setFoodlist] = useState([]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <FaArrowCircleLeft />,
    nextArrow: <FaArrowCircleRight />
  };


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'foodItems'));
      const foodlist = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFoodlist(foodlist);
    };
    fetchData();
  }, []);

  const handleClick = (dishname) =>{
    navigate(`/dish/${dishname}`);
  }




  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {foodlist.map((item) => (
            <div key={item.id} className="food-card" onClick={() => handleClick(item.name)}>
              <img src={item.image} alt={item.name}/>
              <h2 className='food-names'>{item.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default FoodCard;
