// import { useParams } from 'react-router-dom';
// import { GenreCardProps } from "../../Router/Types.types";
// import {Genre} from "../../datas/Genre.data";

// const CategoryPage: React.FC = () => {
//   const { genreTitle } = useParams<{ genreTitle?: string }>();
//   const genre = Genre.find((genre: GenreCardProps) => genre.title.toLowerCase() === genreTitle?.toLowerCase());

//   if (!genre) {
//     // handle the case where the genre is not found
//     return <div>Genre not found</div>;
//   }

//   const { title, image, description, color } = genre;

//   return (
//     <div>
//       <h1>{title} Category Page</h1>
//       <p>{description}</p>
//       {/* add your category page content here */}
//     </div>
//   );
// };

// export default CategoryPage;
