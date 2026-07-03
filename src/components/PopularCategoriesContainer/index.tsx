import React from 'react';
import { usePopularCategories } from '../../hooks/useCategories';
import PopularCategories from '../PopularCategories';


const PopularCategoriesContainer: React.FC = () => {
  const { data: categories = [], isLoading, isError } = usePopularCategories();

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

  return <PopularCategories categories={categories} />;
};

export default PopularCategoriesContainer;