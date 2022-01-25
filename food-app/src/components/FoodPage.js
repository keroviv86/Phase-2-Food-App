import React from 'react';
import {Link} from 'react-router-dom'
import FoodContainer from './FoodContainer';
import Cart from './Cart'

function FoodPage({items, handleAddToCart, handleRemoveFromCart, cartItems}){
    return(
        <div className='row'>
            <FoodContainer 
                items= {items} 
                handleAddToCart={handleAddToCart}/>
            <Cart 
                cartItems={cartItems} 
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddToCart={handleAddToCart}
            />
        </ div>
        
    )
}
export default FoodPage;