import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBooks } from '../../api/books';
import { bookKeys } from '../../api/queryKeys';
import { ProductCard, Rb_Button, Rb_Text } from '@rentbook/rentbook-ui-lib';
import AddToCartModal from './AddToCartModal';
import { addToCart } from '../../services/cartService';
import { AddToCartPayload } from '../../types/cart';
import { showToast } from '../../utils/toast';
import { Book } from '../../types/category';

const TrendingBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [addingBookId, setAddingBookId] = useState<string | null>(null);
  const [addedBookIds, setAddedBookIds] = useState<Set<string>>(new Set());

  const {
    data: trendingBooks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: bookKeys.popular,
    queryFn: () => fetchBooks({ isPopular: 'true' }),
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

  const handleAddToCartClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleProceed = async (payload: AddToCartPayload) => {
    if (!selectedBook) return;
    const bookId = selectedBook.id;
    setAddingBookId(bookId);

    try {
      await addToCart(payload);
      showToast('Book added to rental cart.', 'success');
      setAddedBookIds((prev) => new Set(prev).add(bookId));
    } catch (error) {
      showToast(
        error instanceof Error
          ? error.message
          : 'Failed to add book to cart.',
        'error'
      );
    } finally {
      setAddingBookId(null);
    }
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
            {trendingBooks.map((book) => {
              const isThisBookAdding = addingBookId === book.id;
              const isThisBookAdded = addedBookIds.has(book.id);

              return (
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
                      disabled={isThisBookAdding}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isThisBookAdded) {
                          window.history.pushState({}, '', '/cart');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        } else {
                          handleAddToCartClick(book);
                        }
                      }}
                    >
                      {isThisBookAdding ? 'Adding...' : isThisBookAdded ? 'View Cart' : 'Add to Cart'}
                    </Rb_Button>
                  </ProductCard>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedBook && (
        <AddToCartModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedBook(null);
          }}
          book={selectedBook}
          onProceed={handleProceed}
        />
      )}
    </section>
  );
};

export default TrendingBooks;
