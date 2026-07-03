import { IconType } from 'react-icons';

export interface ApiCategory {
    _id: string;
    name: string;
    isPopular: boolean;
}

export interface ApiResponse {
    status: string;
    message: string;
    data: ApiCategory[];
}

export interface Category {
    id: string;
    name: string;
    icon: IconType;
    accent: string;
}

export interface Book {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    rating: number;
    rentalPrice: string;
    rentalDays: number;
    isFavorite?: boolean;
    isPopular: boolean;
}
