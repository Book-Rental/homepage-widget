import { Rb_Label } from "rentbook-ui-lib";

import { trendingBooks } from "../../Data";

import BookCard from "./BookCard";

const TrendingBooks = () => {
    return (
        <section className="mt-8 w-full">

            <div className="flex items-center justify-between mb-5">

                <Rb_Label className="text-xl font-bold text-gray-900">
                    Trending Books
                </Rb_Label>

                <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                    View all
                </button>

            </div>

            <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
                {trendingBooks.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                    />
                ))}
            </div>

        </section>
    );
};

export default TrendingBooks;