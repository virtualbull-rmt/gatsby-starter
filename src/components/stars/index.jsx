import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import './style.scss';

function getFullStarsByScore(score) {
  return Math.floor(score / 1);
}

function getHalfStarsByScore(score) {
  return score % 1 >= 0.5 ? 1 : 0;
}

function getEmptyStarsByScore(score) {
  return Math.floor(5 - getFullStarsByScore(score) - getHalfStarsByScore(score));
}

export default class Rate extends React.Component {
  state = {
    fullStarts: 0,
    halfStars: 0,
    emptyStars: 0
  };

  static getDerivedStateFromProps(props, state) {
    const score = Math.round(props.score);

    return {
      fullStarts: getFullStarsByScore(score / 2),
      halfStars: getHalfStarsByScore(score / 2),
      emptyStars: getEmptyStarsByScore(score / 2)
    }
  }

  render() {
    return (
      <div className="c-stars">
        {Array(this.state.fullStarts).fill().map((el, key) => (
          <FaStar className="c-star" key={key} />
        ))}
        {Array(this.state.halfStars).fill().map((el, key) => (
          <FaStarHalfAlt className="c-star" key={key} />
        ))}
        {Array(this.state.emptyStars).fill().map((el, key) => (
          <FaRegStar className="c-star" key={key} />
        ))}
      </div>
    )
  }
};