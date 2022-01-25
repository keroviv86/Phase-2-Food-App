
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Foot from './components/Foot';
import HomePage from './components/HomePage';
import FoodPage from './components/FoodPage';
import About from './components/About';
import { Routes, Route } from "react-router-dom";


function App() {
  const [food, setFood] = useState([])
  const [cart, setCart] = useState([])
  
  useEffect(()=> {
    fetch('http://localhost:3001/foods')
    .then(res=>res.json())
    .then(data=> setFood(data))
  }, [])

  function handleAddToCart(food){
    const addToCart = cart.find(
      (item)=> item.id === food.id)
    if (addToCart){
      setCart(cart.map((x)=> 
      x.id === food.id ? {...addToCart, qty: addToCart.qty+1} : x
      ))
    }else{
      setCart([...cart, {...food, qty: 1}])
    }
  }

  function handleRemoveFromCart(foodToRemove){
    const removeFromCart = cart.find(
      (item)=> item.id === foodToRemove.id)
    console.log(removeFromCart)
    if(removeFromCart.qty === 1){
      const remove=cart.filter((x)=>(
        (x.id !== foodToRemove.id)
      ))
      setCart(remove)
    }else{
      const removeItem= cart.map((x)=> (
        x.id === foodToRemove.id ? {...removeFromCart, qty: removeFromCart.qty-1}:x
      ))
      setCart(removeItem)
    }
  }
  //total items checked out
  function sum(){
    if(cart.length>0){
      const cartQuantity = cart.map((item)=> (
        (item.qty)
      ))
        let sum = cartQuantity.reduce((a,b)=> a + b)
        return sum
    }
  }
  
  return (
    <div className="App">
      <Header countCartTotal={sum()}/>
        <Routes>
          <Route path="/" element= {<HomePage />}/>
          <Route path="/about" element= {<About />}/>

          <Route path='/foods' element = {<FoodPage 
            items= {food} 
            handleAddToCart={handleAddToCart}
            cartItems={cart} 
            handleRemoveFromCart={handleRemoveFromCart}
          />} />
        </Routes>
      <Foot />
    </div>
  );
}

export default App;