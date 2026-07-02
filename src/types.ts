import { IconType } from "react-icons";

export interface Book {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    rating: number;
    rentalPrice: number;
    rentalDays: number;
    isFavorite?: boolean;
}

export interface Category {
    id: string;
    name: string;
    icon: IconType;
    bookCount: number;
    accent: string; // CSS color used for the icon chip background
}