  
import React, {useState}from 'react';
import Receipt from './Receipt';

function Cart({cartItems, handleRemoveFromCart, handleAddToCart}) {
  const [checkout, setCheckout] = useState(false);
  const foodPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = foodPrice * 0.09;
  const tipPrice = foodPrice * 0.15;
  const totalPrice = foodPrice + taxPrice + tipPrice;

  function checkoutHandler(){
    setCheckout((checkout)=> !checkout)
  }
    return (
        <div className="block col-1"> 
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
                  <div className="col-2">Price of Food </div>
                  <div className="col-1 text-right">${foodPrice.toFixed(2)}</div>
                </div>

                <div className="row">
                  <div className="col-2">Tax Price</div>
                   <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                </div>

                <div className="row">
                  <div className="col-2">Tip</div>
                  <div className="col-1 text-right"></div>
                ${tipPrice.toFixed(2)}
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>


                <div className="row">
                  <button onClick={checkoutHandler}>Checkout</button>
                </div>
                {checkout ? (
                  <Receipt
                    setCheckout={setCheckout}
                    checkout={checkout}
                    cart={cartItems}
                  />
                ) : (
                  "You have items in your cart"
                )}
              </>
            )}
          </div>
        </div>
    );
  
}



export default Cart;