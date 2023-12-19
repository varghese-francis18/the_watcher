import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

const FiveStarRating = ({ rating }: any) => {
  const starList = [];
  const full = Math.floor(rating);
  const half = rating - parseInt(rating);
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 1; i <= full; i++) {
    starList.push(<StarFill />);
  }
  if (half) {
    starList.push(<StarHalf />);
  }
  for (let i = 1; i <= empty; i++) {
    starList.push(<Star />);
  }

  return <div>{starList.map((item) => item)}</div>;
};

export default FiveStarRating;
