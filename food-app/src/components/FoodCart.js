import React from 'react';

function FoodCart({ item, handleAddToCart, id}) {
    function onHandleClick(e){
        handleAddToCart(item)
    }

    return(
        <div>
            <h1>{item.name}</h1>
            <img onClick = {onHandleClick} src={item.image} height="200px" width="200px" alt={item.name}/>
            <p>${item.price}</p>
        </div>
    )
}

export default FoodCart