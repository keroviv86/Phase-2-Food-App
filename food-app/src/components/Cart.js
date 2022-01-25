  
import React from 'react';
import FoodCart from './FoodCart'

function Cart({cartItems, handleRemoveFromCart, handleAddToCart,}) {
    return (
        <aside className="block col-1">
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                  <button onClick={()=> handleRemoveFromCart(item)} className="remove">
                    -
                  </button>{' '}
                  <button onClick={()=> handleAddToCart(item)} className="add">
                    +
                  </button>
                </div>
    
                <div className="col-2 text-right">
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
    
            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row">
                  <button onClick={() => alert('Implement Checkout!')}>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </aside>
      );
    }



export default Cart;