import React from 'react';
import { useParams } from 'react-router-dom';
import { Concerts } from '../../datas/concert.data';
import Newcard from '../../components/Dash/NewCCard';
import { ConcertType } from '../../types/ConcertCard.types';


type Params = {
  genre: string;
};

const CategoryPage: React.FC = () => {
  const { genre } = useParams<Params>();

  // Filter the concerts by genre
  const filteredConcerts = Concerts.filter(
    (concert: ConcertType) => concert.genre === genre
  );
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-8 mb-4">hello</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredConcerts.map((Concerts: ConcertType) => (
          <Newcard key={Concerts.id} concert={Concerts} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
