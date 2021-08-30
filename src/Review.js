import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const checkNumber = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num <= 0) {
      return reviews.length - 1;
    }
    return num;
  };
  const prevPerson = () => {
    let newIndex = index + 1;
    setIndex(checkNumber(newIndex));
  };
  const nextPerson = () => {
    let newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  };
  const randomPeople = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (index === newIndex) {
      newIndex = newIndex + 1;
      setIndex(checkNumber(newIndex));
    }
    setIndex(checkNumber(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPeople}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
