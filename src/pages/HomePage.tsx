import React from 'react';
import BookCarousel from '../components/Carousel';
import PopularCategoriesContainer from '../components/PopularCategoriesContainer';
import TrendingBooks from '../components/TrendingBooks';
import { trendingBooks } from '../Data';
import { Book } from '../types/category';





const HomePage: React.FC = () => {

  const handleBookClick = (book: Book) => {
    console.log('Navigate to /book/' + book.id);
  };

  return (
    <main className="mx-auto ">
      < BookCarousel />

      <PopularCategoriesContainer />

      <TrendingBooks
        books={trendingBooks}
        onBookClick={handleBookClick}
        onViewAllClick={() => console.log('Navigate to /trending')}
        onToggleFavorite={(book) => console.log('Toggled favorite:', book.title)}
      />
    </main>
  );
};

export default HomePage;