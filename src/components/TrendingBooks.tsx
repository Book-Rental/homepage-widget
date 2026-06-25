import React, { useState } from "react";
import { Book } from "../types";

interface TrendingBooksProps {
    books: Book[];
    onBookClick?: (book: Book) => void;
    onViewAllClick?: () => void;
    onToggleFavorite?: (book: Book) => void;
}

const TrendingBooks: React.FC<TrendingBooksProps> = ({
    books,
    onBookClick,
    onViewAllClick,
    onToggleFavorite,
}) => {
    const [favorites, setFavorites] = useState<Set<string>>(
        new Set(books.filter((b) => b.isFavorite).map((b) => b.id))
    );

    const handleFavoriteClick = (e: React.MouseEvent, book: Book) => {
        e.stopPropagation();
        setFavorites((prev) => {
            const next = new Set(prev);
            next.has(book.id) ? next.delete(book.id) : next.add(book.id);
            return next;
        });
        onToggleFavorite?.(book);
    };

    return (
        <section className="mt-12">
            <div className="mb-4.5 flex items-baseline justify-between">
                <h2 className="text-xl font-bold text-[#1b1530]">Trending books</h2>
                <button
                    onClick={onViewAllClick}
                    className="p-1 text-sm font-semibold text-[#e2543d] hover:underline"
                >
                    View all
                </button>
            </div>

            <div className="grid grid-cols-5 gap-4.5 md:grid-cols-3 sm:grid-cols-2">
                {books.map((book) => {
                    const isFavorite = favorites.has(book.id);
                    return (
                        <article
                            key={book.id}
                            onClick={() => onBookClick?.(book)}
                            className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#ece8f0] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(27,21,48,0.1)]"
                        >
                            <div className="relative aspect-[3/4] bg-[#faf7f0]">
                                <img
                                    src={book.coverUrl}
                                    alt={`Cover of ${book.title}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                                <button
                                    onClick={(e) => handleFavoriteClick(e, book)}
                                    aria-label={
                                        isFavorite
                                            ? `Remove ${book.title} from favorites`
                                            : `Add ${book.title} to favorites`
                                    }
                                    className={`absolute right-2.5 top-2.5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/90 text-sm transition-all hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2543d] ${isFavorite ? "text-[#e2543d]" : "text-[#5b5470]"
                                        }`}
                                >
                                    ♥
                                </button>
                            </div>

                            <h3 className="mx-3.5 mb-0.5 mt-3.5 line-clamp-2 text-sm font-bold leading-snug text-[#1b1530]">
                                {book.title}
                            </h3>
                            <p className="mx-3.5 text-xs text-[#5b5470]">{book.author}</p>

                            <div className="mx-3.5 mb-3.5 mt-3 flex items-center justify-between">
                                <span className="text-xs font-semibold text-[#d99a2b]">
                                    ★ {book.rating.toFixed(1)}
                                </span>
                                <span className="text-[13px] font-bold text-[#1b1530]">
                                    ₹{book.rentalPrice}{" "}
                                    <span className="text-[11px] font-medium text-[#5b5470]">
                                        / {book.rentalDays} days
                                    </span>
                                </span>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default TrendingBooks;