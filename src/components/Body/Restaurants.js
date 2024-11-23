// import React from 'react'
// import './Restaurants.css'
// import { FaStar, FaStarHalf } from "react-icons/fa";

// export const Restaurants = () => {
//     return (
//         <>
//             <h2 className='heading'>Highly Rated Restaurants</h2><br></br>
//             <div className='restaurants'>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/ss.jpeg" alt="" />
//                     <h4>SS Hyderabad Biriyani, Royapuram</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>4.5  </p></div>
//                     <p className='address'>No.64, 57, W Madha Church St, Pudumanaikuppam, Royapuram, Chennai, Tamil Nadu 600013</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/charminar.jpeg" alt="" />
//                     <h4>Charminar Biryani Centre, Royapettah</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>4.2  </p></div>
//                     <p className='address'>Near, 92 232, Dr Besant Rd, Mirsahibpet, Royapettah, Chennai, Tamil Nadu 600014</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/nizam.jpeg" alt="" />
//                     <h4>Nizam Biriyani, Pudumanaikuppam</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStar />

//                     </p>4.2  </p></div>
//                     <p className='address'>19, W Madha Church St, Opposite to Police Quarters, Pudumanaikuppam, Royapuram, Chennai, Tamil Nadu 600013</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/ya.png" alt="" />
//                     <h4>Yaa Mohaideen Biriyani</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStar />

//                     </p>4.0  </p></div>
//                     <p className='address'>No.81, 22, Pudumanaikuppam, Periyar Nagar, Pallavaram, Chennai, Tamil Nadu 600043</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/suku.jpeg" alt="" />
//                     <h4>Sukkubhai Biryani</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>4.1  </p></div>
//                     <p className='address'>14, Railway Sta Rd, near Saint Anthony's Church, Ramapuram, Alandur, Chennai, Tamil Nadu 600016</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/buhari.jpeg" alt="" />
//                     <h4>BUHARI - MOUNT ROAD</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStar />

//                     </p>4.0  </p></div>
//                     <p className='address'>83, Anna Salai, Border Thottam, Anna Salai, Triplicane, Chennai, Tamil Nadu 600002</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/bilal.jpeg" alt="" />
//                     <h4>Mount Road Bilal</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>3.9  </p></div>
//                     <p className='address'>No.64, 57, W Madha Church St, Anna Salai, Chennai, Tamil Nadu 600002</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/nayeemm.jpeg" alt="" />
//                     <h4>Nayeem Biriyani, Periamet</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>3.7  </p></div>
//                     <p className='address'>No.41/63, 1ST Floor, Wuthucattan Street, Periamet, Vepery, Chennai.</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/thala.jpeg" alt="" />
//                     <h4>Dindigul Thalappakatti</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>3.5  </p></div>
//                     <p className='address'>New No.229, Old No.372, 375, NSC Bose Rd, George Town, Chennai, Tamil Nadu 600001</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/star.png" alt="" />
//                     <h4>Ambur Star Biryani</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>3.5  </p></div>
//                     <p className='address'>51 Th Block Sathaymurthy, Annai Indira Nagar St, Vyasarpadi, Chennai, Tamil Nadu 600039</p>
//                 </div>
//                 <div className='sshyderabad'>
//                     <img src="/hotels/arcot.jpeg" alt="" />
//                     <h4>Arcot Biriyani, Porur</h4>
//                     <div className='ratingcontent'><p className='rating'><p className='star'><FaStar /><FaStar />
//                     <FaStar />
//                     <FaStarHalf />

//                     </p>3.5  </p></div>
//                     <p className='address'>Ne No: 27, Kundrathur Main Rd, Kungumam Nagar, Porur, Chennai, Tamil Nadu 600116</p>
//                 </div>

//             </div>
//         </>
//     )
// }


import React, { useState, useEffect } from 'react';
import './Restaurants.css';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import db from "./Firebase";  // Make sure to import your Firebase configuration.

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            // Fetching the restaurant data from Firestore
            const querySnapshot = await getDocs(collection(db, "restaurants"));
            const restaurantList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()  // Extracts the data from each document and adds the doc id
            }));
            setRestaurants(restaurantList);  // Set the fetched data to state
        };
        fetchRestaurants();
    }, []);

    return (
        <>
            <h2 className='heading'>Highly Rated Restaurants</h2><br />
            <div className='restaurants'>
                {restaurants.map(restaurant => (
                    <div className='sshyderabad' key={restaurant.id}>
                        <img src={restaurant.image} alt={restaurant.name} />
                        <h4>{restaurant.name}</h4>
                        <div className='ratingcontent'>
                            <p className='rating'>
                                <span className='star'>
                                    {/* Dynamically render stars based on rating */}
                                    {[...Array(5)].map((_, index) => {
                                        if (index < Math.floor(restaurant.rating)) {
                                            return <FaStar key={index} />;
                                        } else if (index === Math.floor(restaurant.rating) && restaurant.rating % 1 !== 0) {
                                            return <FaStarHalf key={index} />;
                                        }
                                        return null;
                                    })}
                                </span>
                                {restaurant.rating}
                            </p>
                        </div>
                        <p className='address'>{restaurant.address}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
