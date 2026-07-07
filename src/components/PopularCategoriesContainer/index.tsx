import React, { useEffect } from 'react';
import { usePopularCategories } from '../../hooks/useCategories';
import PopularCategories from '../PopularCategories';
import { Category } from '../../types/category';
import { slugify } from '../../utils/slugify';


const PopularCategoriesContainer: React.FC = () => {
  const { data: categories = [], isLoading, isError } = usePopularCategories();

  useEffect(() => {
    const event = new CustomEvent('widget-loading-status', {
      detail: isLoading
    });
    window.dispatchEvent(event);
  }, [isLoading]);

  const handleCategoryClick = (category: Category) => {
    window.history.pushState({}, '', `/books?categories=${slugify(category.name)}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  const handleViewAllClick = () => {
    window.history.pushState({}, '', '/books?isPopular=true')
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  if (isLoading) {
    return <p className="text-center py-6 text-[#5b6b78]">Loading categories...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-6 text-red-500">
        Couldn&apos;t load categories. Please try again.
      </p>
    );
  }

  if (categories.length === 0) {
    return (
      <p className="text-center py-6 text-[#5b6b78]">
        No popular categories available right now.
      </p>
    );
  }

  return <PopularCategories categories={categories}
    onCategoryClick={handleCategoryClick}
    onViewAllClick={handleViewAllClick} />;
};

export default PopularCategoriesContainer;