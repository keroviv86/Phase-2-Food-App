import React from 'react';

function Header({countCartTotal}) {
    console.log(countCartTotal)
    return (
        <header className="block row center">
          <div>
            <a href="#/">
              <h1>Japanese Restaurant</h1>
            </a>
          </div>
          <div>
            <a href="#/cart">
              Cart{' '}
              {countCartTotal ? (
                <button className="badge">{countCartTotal}</button>
              ) : (
                ''
              )}
            </a>{' '}
            <a href="#/signin"> SignIn</a>
          </div>
        </header>
      );
    }




export default Header;