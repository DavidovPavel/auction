import { User } from 'firebase';

export interface Product {
  id: string;
  title: string;
  position: number;
  cost: number;
  raiting: number;
  reviews?: number;
  description?: string;
}

export interface Review {
  id: number;
  date: any;
  message: string;
  user: User;
}
