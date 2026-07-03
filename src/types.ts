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

export interface Category {
    id: string;
    name: string;
    icon: string; // emoji or icon key, swap for an icon component if you have a set
    bookCount: number;
    accent: string; // CSS color used for the icon chip background
}