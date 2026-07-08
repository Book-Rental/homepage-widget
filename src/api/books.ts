import axios from 'axios';
import { ENDPOINTS } from './api';
import { Book } from '../types/category';

interface ApiBook {
    _id: string;
    name: string;
    author: string;
    coverImage: string;
    rentalPricePerDay: string;
    isPopular: boolean;
}

interface BooksResponse {
    status: string;
    data: {
        products: ApiBook[];
    };
}

export const fetchBooks = async (): Promise<Book[]> => {
  const { data } = await axios.get<BooksResponse>(ENDPOINTS.books);

  if (data.status !== 'Success') {
    throw new Error('Failed to fetch books');
  }

  return data.data.products.map((book) => ({
    id: book._id,
    title: book.name,
    author: book.author,
    coverUrl: book.coverImage,
    rating: 4.5, // Till Api provides data
    rentalPrice: book.rentalPricePerDay,
    rentalDays: 1,
    isFavorite: false,
    isPopular: book.isPopular,
  }));
};