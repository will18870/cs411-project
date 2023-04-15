import { GenreCardProps } from '../../types/GenreCard.types';
import React, { useState } from "react";


const GenreCard: React.FC<GenreCardProps> = ({ title, image, description, color }) => {
  const [effect, setEffect] = useState(false);
  const col = color;
  return (
    <button onClick={() => {
      setEffect(true);
    }} className={`${effect && "animate-wiggle"}  p-4 text-white 
     hover:bg-blue-700 hover:shadow-xl w-1/5 mr-6 mb-6 rounded-xl`} 
     onAnimationEnd={() => setEffect(false)} >
      <div className={`aspect-square shadow-xl rounded-xl overflow-hidden bg-${col}`}>
        <h2 className="text-white font-bold text-3xl pt-6 pl-6">{title}</h2>
      </div>
    </button>
  );
};

export default GenreCard;

