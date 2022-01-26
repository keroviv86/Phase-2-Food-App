import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
    return (
      <>
        <body className="homepage">
           <div className="container">
             <img src="https://www.yimmyadventures.com/wp-content/uploads/2021/05/20200501-DSC_1917-scaled.jpg" alt=""/>
             <img src="https://www.chopstickchronicles.com/wp-content/uploads/2020/06/Tempura-Udon-update-18.jpg" alt=""/>
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
