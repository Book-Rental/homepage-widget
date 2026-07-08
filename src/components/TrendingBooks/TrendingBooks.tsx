import { useQuery } from '@tanstack/react-query';
import { ProductCard, Rb_Anchor, Rb_Button, Rb_Label } from 'rentbook-ui-lib';
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
      <div className='mx-10 my-10'>
        <div className="mb-5 flex w-full items-center justify-between">
          <Rb_Label className="text-xl font-bold text-gray-900">
            Trending Books
          </Rb_Label>

          <Rb_Anchor>
            View all
          </Rb_Anchor>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {trendingBooks.length > 0 ? (
              trendingBooks.map((book) => (
                <div key={book.id}>
                  <ProductCard
                    imageUrl={book.coverUrl}
                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    priceText={`₹${book.rentalPrice}/day`}
                  >
                    <Rb_Button
                      className="primary"
                      onClick={() => console.log('Add to cart:', book.id)}
                    >
                      Add to Cart
                    </Rb_Button>
                  </ProductCard>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No trending books found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingBooks;