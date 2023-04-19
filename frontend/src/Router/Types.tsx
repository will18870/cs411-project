export interface Member {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export interface routerType {
  path: string;
  element: React.ReactNode;
  title: string;
}

export interface ConcertType {
  id: number;
  title: string;
  image: string;
  date: string;
  location: string;
  ticketLink: string;
  description: string;
  genre: string
}
export interface GenreCardProps {
  title: string;
  image: string;
  description: string;
  color: string;
}