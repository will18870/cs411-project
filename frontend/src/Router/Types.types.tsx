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
  _embedded: any;
  id: string;
  name: string;
  address: string;
  price_min: string;
  price_max: string;
  date: string;
  dates: {
    start: {
      localDate: string;
    }
  }
  time: string;
  url: string;
  images: {
    url: string
  }[];
  genre: string;
  subgenre: string;
  segment: string;
  type: string;
  status: string;
  info: string;
  seatmap: string;
  description: string;
}

interface GenreCardProps {
  title: string;
  image: string;
  description: string;
  color: string;
}

interface Followers {
  href: string | null;
  total: number;
}

interface Artist {
  external_urls: { spotify: string };
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface UserInfo {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number | null;
    url: string;
    width: number | null;
  }[];
  product: string;
  type: string;
  uri: string;
}

// Add other properties as needed

export type { MemberType, routerType, ConcertType, GenreCardProps, Artist, Followers, UserInfo };