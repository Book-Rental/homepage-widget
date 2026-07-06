import React from 'react';
import BookCarousel from '../components/Carousel';
import PopularCategoriesContainer from '../components/PopularCategoriesContainer';
import TrendingBooks from '../components/TrendingBooks/TrendingBooks';

const HomePage: React.FC = () => {

  return (
    <main className="w-full ">
      < BookCarousel />
      <PopularCategoriesContainer />
      <TrendingBooks />
    </main>
  );
};

export default HomePage;