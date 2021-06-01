import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaGithubSquare, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {id, image, job, name, text} = people[index]


  const checkNumber =(number) =>{
    if (number > people.length -1) {
        return 0
    }
    if (number < 0) {
      return people.length - 1      
    }
    return number    
  }
  
  //Siguiente persona
  const nextPerson = () =>{
      setIndex((index) =>{
        let newIndex = index + 1
        return checkNumber(newIndex)
      })
  }
  //Siguiente persona
  const prevPerson = () =>{
    setIndex((index) =>{
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }   

  const randomPerson=()=>{
   let random = Math.floor( Math.random() * people.length)
    console.log(random)
    if (random === index) {
      random = randomPerson()
    } else {
      setIndex(random)
    }
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
      <button className="prev-btn" onClick={()=>{prevPerson()}}>
        <FaChevronLeft />
      </button>
      <button className="prev-btn" onClick={()=>{nextPerson()}}>
        <FaChevronRight />
      </button>
      </div>
      <button className="random-btn" onClick={()=>{randomPerson()}}>
         Suprise Me 
        <FaGithubSquare />
      </button>
    </article>
  );
};

export default Review;
