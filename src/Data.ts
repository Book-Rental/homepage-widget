import { Book, Category } from "./types";

export const categories: Category[] = [
    { id: "fiction", name: "Fiction", icon: "📖", bookCount: 1200, accent: "#EDEAFB" },
    { id: "programming", name: "Programming", icon: "💻", bookCount: 850, accent: "#E8F1FE" },
    { id: "business", name: "Business", icon: "💼", bookCount: 560, accent: "#FFF1E0" },
    { id: "self-help", name: "Self Help", icon: "🌱", bookCount: 500, accent: "#E6F7EC" },
    { id: "history", name: "History", icon: "🏛️", bookCount: 400, accent: "#EAF0FB" },
    { id: "science", name: "Science", icon: "🔬", bookCount: 300, accent: "#EAF6FB" },
];

export const trendingBooks: Book[] = [
    {
        id: "1",
        title: "Atomic Habits",
        author: "James Clear",
        coverUrl: "https://covers.openlibrary.org/b/isbn/0735211299-L.jpg",
        rating: 4.8,
        rentalPrice: 79,
        rentalDays: 15,
    },
    {
        id: "2",
        title: "The Alchemist",
        author: "Paulo Coelho",
        coverUrl: "https://covers.openlibrary.org/b/isbn/0061122416-L.jpg",
        rating: 4.7,
        rentalPrice: 69,
        rentalDays: 15,
    },
    {
        id: "3",
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        coverUrl: "https://covers.openlibrary.org/b/isbn/1612680194-L.jpg",
        rating: 4.5,
        rentalPrice: 89,
        rentalDays: 15,
    },
    {
        id: "4",
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        coverUrl: "https://covers.openlibrary.org/b/isbn/0062457713-L.jpg",
        rating: 4.4,
        rentalPrice: 79,
        rentalDays: 15,
    },
    {
        id: "5",
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        coverUrl: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg",
        rating: 4.6,
        rentalPrice: 89,
        rentalDays: 15,
    },
];