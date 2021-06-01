import React from 'react';
import {FaGithubSquare} from 'react-icons/fa'
import Review from './Review';
import people from './data'
function App() {
  return (  <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div> 
          {console.log(people)}          
          <Review />
        </div>
      </section>
    </main>
  )}

export default App;
