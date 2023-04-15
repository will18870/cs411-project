import { Genre } from '../datas/Genre.data';
export interface ConcertType {
    id: number;
    title: string;
    image: string;
    date: string;
    location: string;
    ticketLink: string;
    description: string;
    genre:string
  }