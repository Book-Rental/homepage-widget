
import React from 'react';
import { Book, Category } from './types';
import PopularCategories from './components/PopularCategories';
import TrendingBooks from './components/TrendingBooks';
import { categories, trendingBooks } from './Data';

const HomePage: React.FC = () => {


  const handleCategoryClick = (category: Category) => {
    console.log('Navigate to /category/' + category.id);
  };

  const handleBookClick = (book: Book) => {
    console.log('Navigate to /book/' + book.id);
  };

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>

      <PopularCategories
        categories={categories}
        onCategoryClick={handleCategoryClick}
        onViewAllClick={() => console.log('Navigate to /categories')}
      />

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