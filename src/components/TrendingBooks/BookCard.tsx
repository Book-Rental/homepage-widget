import { Image, Rb_Label, Rb_Rating } from 'rentbook-ui-lib';
import { Book } from '../../types';

interface Props {
    book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="w-[150px] flex-shrink-0 cursor-pointer ml-8">

      <Image
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-[210px] rounded-lg object-cover"
      />

      <Rb_Label className="block mt-3 text-sm font-semibold text-gray-900 line-clamp-2 h-10">
        {book.title}
      </Rb_Label>

      <Rb_Label className="block mt-1 text-xs text-gray-500">
        {book.author}
      </Rb_Label>

      <div className="flex items-center gap-1 mt-2">
        <Rb_Rating
          value={book.rating}
          max={1}
          size={12}
        />

        <span className="text-xs text-gray-700">
          {book.rating}
        </span>
      </div>

      <div className="mt-2 text-sm font-semibold text-gray-900">
                ₹{book.rentalPrice}

        <span className="ml-1 font-normal text-gray-500">
                    / {book.rentalDays} days
        </span>
      </div>

    </div>
  );
};

export default BookCard;