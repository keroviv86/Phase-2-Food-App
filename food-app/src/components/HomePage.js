import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
    return (
      <>
        <body className="homepage">
           <div className="container">
             <img src="https://www.chopstickchronicles.com/wp-content/uploads/2020/06/Tempura-Udon-update-18.jpg" alt=""/>
             <img src="https://previews.123rf.com/images/ferli/ferli1611/ferli161100174/65258215-%E6%97%A5%E6%9C%AC%E9%A3%9F%E3%81%AE%E5%88%BA%E8%BA%AB%E3%81%A8%E3%81%AB%E3%81%8E%E3%82%8A%E5%AF%BF%E5%8F%B8%E7%9B%9B%E3%82%8A%E5%90%88%E3%82%8F%E3%81%9B%E3%81%AE%E4%B8%8A%E9%9D%A2%E3%81%AE%E8%82%96%E5%83%8F%E7%94%BB.jpg" alt=""/>
             <img src="https://www.sugarsaltmagic.com/wp-content/uploads/2020/11/Karaage-Chicken-Japanese-Fried-Chicken-13FEAT.jpg" alt=""/>
           </div>
            <main className="home">
            <h2>Welcome to the homepage!</h2>
            </main>
            {/* <nav>
            <Link to="/foods">Place Order Here</Link>
            </nav> */}
        </body>
      </>
    );
  }

  export default HomePage
