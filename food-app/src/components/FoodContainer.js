
import React from 'react';
import FoodCart from './FoodCart'

function FoodContainer({items, handleAddToCart}) {
    const itemsToDisplay =items.map((item)=> (
        <FoodCart
        key={item.id}
        id= {item.id}
        item={item}
        handleAddToCart= {handleAddToCart}
        />
    ))
    return (
        <main className="block col-2">
          <h2>Yummy Japanese Food</h2>
          {itemsToDisplay}
          <div className="row">
          </div>
        </main>
      );
    }




export default FoodContainer;