import { GenreCardProps } from '../../types/GenreCard.types';
import React, { useState } from "react";


const GenreCard: React.FC<GenreCardProps> = ({ title, image, description, color }) => {
  const [effect, setEffect] = useState(false);
  const col = color;
  return (

    <div className="w-1/5 mr-6 mb-6 hover:opacity-90">
        <div className={`aspect-square shadow-xl rounded-xl overflow-hidden bg-${col}`}>
        <h2 className="text-black font-bold text-3xl pt-6 pl-6">{title}</h2>
      </div>
      </div>
  );
};

export default GenreCard;

