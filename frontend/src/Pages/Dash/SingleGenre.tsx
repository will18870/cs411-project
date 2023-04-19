import { GenreCardProps } from '../../types/GenreCard.types';
import React, { useState } from "react";
import ConcertCards from '../../components/Dash/ConcertCards';


const SingleGenre: React.FC<GenreCardProps> = ({ title, image, description, color }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <ConcertCards />
    </div>
  );
};

export default SingleGenre;