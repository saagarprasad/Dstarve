import Home from './components/Body/Home';
import 'react-toastify/dist/ReactToastify.css'; // Make sure this is imported globally
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fooditems from './components/Foodlists/Fooditems';
import Header from './components/Header/Header';
import CartPage from './components/Body/CartPage';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';



function App() {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClicknumbertocart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
    setCart([...cart, item])
  };

  const handleChange = (item,d) =>{
    let ini = -1;
    cart.forEach((data,index)=>{
      if(data.id === item.id){
        ini = index;
      };
    })
    const tempArr = cart;
    tempArr[ini].quantity+= d;
    if(tempArr[ini].quantity===0){
      tempArr[ini].quantity = 1;
    }
    setCart([...tempArr])
  
  }

  useEffect(() => {
    if (warning) {
      toast.warning("Item already exists in the cart", {
        position: "top-center",
        toastId: "cart-warning-toast", // Unique ID to allow repeated display
        autoClose: 3000,
        theme: "colored",
      });
      setWarning(false); // Reset warning state after showing toast
    }
  }, [warning]);



  return (
    <>
      <BrowserRouter>
        <Header size={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/dish/:dishname' element={<Fooditems handleClicknumbertocart={handleClicknumbertocart} />}></Route>
          <Route path='/cartpage' element={<CartPage cart={cart} setCart={setCart} handleChange = {handleChange} />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} theme="colored" /> {/* Global toast container */}
    </>
  );

}

export default App;
