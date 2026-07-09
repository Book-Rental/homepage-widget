import { useQuery } from '@tanstack/react-query';
import { ProductCard, Rb_Button, Rb_Text } from 'rentbook-ui-lib';
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

  const handleViewAllClick = () => {
    window.history.pushState({}, '', '/books?isPopular=true');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleBookClick = (bookId: string) => {
    window.history.pushState({}, '', `/books-details?bookId=${bookId}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleAddToCart = (bookId: string) => {
    // TODO: Integrate with cart functionality when available.
    console.log('Add to cart:', bookId);
  };

  return (
    <section className="mt-8 w-full">
      <div className='mx-10 my-10'>
        <div className="mb-5 flex w-full items-center justify-between">
          <Rb_Text
            variant="h2"
            className="font-bold text-[#1b1530]"
          >
            Trending Books
          </Rb_Text>

          <Rb_Button
            variant="primary"
            className="!bg-transparent !p-0 !text-[#4F7CF3] hover:!bg-transparent hover:underline"
            onClick={handleViewAllClick}
          >
            View all
          </Rb_Button>
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

          <div className="flex gap-10 overflow-x-auto overflow-y-hidden scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {trendingBooks.map((book) => (
              <div key={book.id} onClick={() => handleBookClick(book.id)}>
                <ProductCard
                  imageUrl={book.coverUrl}
                  title={book.title}
                  author={book.author}
                  rating={book.rating}
                  priceText={`₹${book.rentalPrice}/day`}
                >
                  <Rb_Button
                    className="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(book.id);
                    }}
                  >
                    Add to Cart
                  </Rb_Button>
                </ProductCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingBooks;