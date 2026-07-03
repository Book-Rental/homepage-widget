import React from 'react';
import BookCarousel from '../components/Carousel';
import PopularCategoriesContainer from '../components/PopularCategoriesContainer';
import TrendingBooks from '../components/TrendingBooks/TrendingBooks';

const HomePage: React.FC = () => {

  // const handleBookClick = (book: Book) => {
  //   console.log('Navigate to /book/' + book.id);
  // };

  return (
    <main className="mx-auto ">
      < BookCarousel />

      <PopularCategoriesContainer />

      <TrendingBooks/>
    </main>
  );
};

export default HomePage;