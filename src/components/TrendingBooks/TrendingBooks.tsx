import { useQuery } from '@tanstack/react-query';
import { ProductCard, Rb_Label } from 'rentbook-ui-lib';
//import BookCard from './BookCard';
import { fetchBooks } from '../../api/books';
import { bookKeys } from '../../api/queryKeys';

const TrendingBooks = () => {
    const {
        data: trendingBooks = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: bookKeys.all,
        queryFn: fetchBooks,
        select: (books) => books.filter((book) => book.isPopular),
        staleTime: 1000 * 60 * 5,
        retry: 2,
        refetchOnWindowFocus: false,
    });

    return (
        <section className="mt-8 w-full">
            <div className="mb-5 flex items-center justify-between">
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

            {isLoading ? (
                <div className="py-6 text-center text-gray-500">
                    Loading trending books...
                </div>
            ) : isError ? (
                <div className="py-6 text-center text-red-500">
                    {(error as Error).message}
                </div>
            ) : (
                <div className="flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {trendingBooks.length > 0 ? (
                        trendingBooks.map((book) => (
                            //   <BookCard
                            //     key={book.id}
                            //     book={book}
                            //   />
                            <div
                                key={book.id}
                                className="w-[160px] flex-shrink-0 flex flex-col"
                            >
                                <div className="overflow-hidden rounded-lg">
                                    <ProductCard
                                        imageUrl={book.coverUrl}
                                        title={book.title}
                                        author={book.author}
                                        rating={book.rating}
                                        priceText={book.rentalPrice}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No trending books found.</p>
                    )}
                </div>
            )}
        </section>
    );
};

export default TrendingBooks;