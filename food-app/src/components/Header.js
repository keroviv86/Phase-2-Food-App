import React from 'react';
import {Link} from 'react-router-dom'

function Header({countCartTotal}) {
    console.log(countCartTotal)
    return (
      <body className="header">
        <header>
          <span>The Japanese Restaurant</span>
            <a href="#/">
                <nav className="nav">
                  <a href="#/nav"><Link to="/">Home</Link> </a>{' '} |
                  <a href="#/nav"><Link to="/about">About</Link></a>{' '} |
                  <a href="#/nav"><Link to="/foods">Order Now</Link></a>
                </nav>
      
            </a>
            <div className="cart">
              <a href="#/cart">
                Cart{' '}
                {countCartTotal ? (
                  <button className="badge">{countCartTotal}</button>
                ) : (
                  ''
                )}
              </a>{' '} |
              <a href="#/signin"> SignIn</a>
            </div>
            
        </header>
      </body>
        // <header className="block row center">
        //   <div>
        //     <a href="#/">
        //       <h1>The Japanese Restaurant</h1>
        //         <nav >
        //           <a href="#/nav"><Link to="/">Home</Link> </a> |
        //           <a href="#/nav"><Link to="/about">About</Link></a>
        //         </nav>
      
        //     </a>
        //   </div>
        //   <div>
        //     <a href="#/cart">
        //       Cart{' '}
        //       {countCartTotal ? (
        //         <button className="badge">{countCartTotal}</button>
        //       ) : (
        //         ''
        //       )}
        //     </a>{' '} |
        //     <a href="#/signin"> SignIn</a>
        //   </div>
        // </header>
      );
    }




export default Header;