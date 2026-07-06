import React from 'react';
import bookImage1 from '../../assets/dariuszsankowski-glasses-1052023_1920.jpg';
import bookImage2 from '../../assets/jarmoluk-old-books-436498_1920.jpg';
import bookImage3 from '../../assets/josealbafotos-leaves-1076307_1920.jpg';
import { Carousel } from 'rentbook-ui-lib';
import type { CarouselSlide } from 'rentbook-ui-lib';

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: bookImage1,
    title: 'Borrow the Story',
    description: 'Explore thousands of books at affordable rental prices.',
  },
  {
    id: 2,
    image: bookImage2,
    title: 'Discover New Worlds',
    description: 'Find your next favorite novel today.',
  },
  {
    id: 3,
    image: bookImage3,
    title: 'Read More, Spend Less',
    description: 'Enjoy flexible book rentals anytime.',
  },
];

const BookCarousel: React.FC = () => {

  return (
    <Carousel
      slides={slides}
      widthClassName='w-full'
      heightClassName='h-[500px]'
      autoPlay
      showNavigation
      showPagination
      onSlideClick={(slide) => console.log(slide)}
      onButtonClick={() => {
        window.history.pushState({}, '', '/books')
        window.dispatchEvent(new PopStateEvent('popstate'));
      }}
    />
  );
};

export default BookCarousel;