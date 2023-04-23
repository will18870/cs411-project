interface MemberType {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface routerType {
  path: string;
  element: React.ReactNode;
  title: string;
}

interface ConcertType {
  genre:string
  artist: string;
  title: string;
  image: string;
  description: string;
  color: string;
  address: string;
  date: string;
  time: string;
  price: string;
  url: string;
  id: string;
}

interface GenreCardProps {
  title: string;
  image: string;
  description: string;
  color: string;
}

export type { MemberType, routerType, ConcertType, GenreCardProps };