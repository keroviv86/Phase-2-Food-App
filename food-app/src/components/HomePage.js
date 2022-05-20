import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
    return (
      <>
        <body className="homepage">
           <div className="container">
             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimage-500816234%2Fjapanese-food-sashimi.html&psig=AOvVaw3nZ80n9KAKByNJLU56mulp&ust=1653167446427000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiE7On-7vcCFQAAAAAdAAAAABAJ" alt=""/>
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
