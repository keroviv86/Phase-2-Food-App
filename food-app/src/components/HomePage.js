import React from 'react';
import {Link} from 'react-router-dom'

function HomePage() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/foods">Place Order Here</Link>
        </nav>
      </>
    );
  }

  export default HomePage