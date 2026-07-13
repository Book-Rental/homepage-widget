import React, { useEffect } from 'react';
import { usePopularCategories } from '../../hooks/useCategories';
import PopularCategories from '../PopularCategories';
import { Category } from '../../types/category';
import { slugify } from '../../utils/slugify';
import { Rb_LoadingSpinner } from '@rentbook/rentbook-ui-lib';

const MAX_VISIBLE_CATEGORIES = 6;

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
    window.history.pushState({}, '', '/categories?isPopular=true')
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  if (isLoading) {
    return <Rb_LoadingSpinner text="Loading categories..." />;
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
  const visibleCategories = categories.slice(0, MAX_VISIBLE_CATEGORIES);

  return <PopularCategories categories={visibleCategories}
    onCategoryClick={handleCategoryClick}
    onViewAllClick={handleViewAllClick} />;
};

export default PopularCategoriesContainer;