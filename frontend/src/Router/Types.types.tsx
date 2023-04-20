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
  id: number;
  title: string;
  image: string;
  date: string;
  location: string;
  ticketLink: string;
  description: string;
  genre: string
}
interface GenreCardProps {
  title: string;
  image: string;
  description: string;
  color: string;
}

export type { MemberType, routerType, ConcertType, GenreCardProps };