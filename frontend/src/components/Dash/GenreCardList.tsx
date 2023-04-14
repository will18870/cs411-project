import { Genre } from '../../datas/Genre.data';
import { GenreCardProps } from "../../types/GenreCard.types";
import GenreCard from "./GenreCard";


export default function GenreCardList() {
  return (
    <>
      <div className="pt-8 ml-8 flex flex-wrap">

        {Genre.map((Genre: GenreCardProps) => (
          <GenreCard
            key={Genre.title}
            title={Genre.title}
            image={Genre.image}
            description={Genre.description}
            color={Genre.color}
          />
        ))}
      </div>
    </>
  );
}
