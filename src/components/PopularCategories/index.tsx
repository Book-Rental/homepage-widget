import React from 'react';
import { Category } from '../../types/category';
import { Rb_Button, Rb_Icon, Rb_Text } from 'rentbook-ui-lib';

interface PopularCategoriesProps {
  categories: Category[];
  onCategoryClick?: (category: Category) => void;
  onViewAllClick?: () => void;
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({
  categories,
  onCategoryClick,
  onViewAllClick,
}) => {
  return (
    <section className="mx-auto mt-10 mb-10 w-full px-4">

      <div className="mb-5 flex items-center justify-between">
        <Rb_Text
          variant="h2"
          className="font-bold text-[#1b1530]"
        >
          Popular Categories
        </Rb_Text>

        <Rb_Button
          variant="primary"
          onClick={onViewAllClick}
          className="!bg-transparent !p-0 !text-[#4F7CF3] hover:!bg-transparent hover:underline"
        >
          View all
        </Rb_Button>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((category) => (
          <Rb_Button
            key={category.id}
            variant="primary"
            onClick={() => onCategoryClick?.(category)}
            className="
              group
              h-40
              !bg-white
              !border
!border-[#D1D5DB]        
      rounded-xl
              flex
              flex-col
              items-center
              justify-center
              gap-3
              transition-all
              duration-200
              hover:!bg-white
              hover:shadow-md
              hover:-translate-y-1
            "
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: category.accent }}
            >
              <Rb_Icon
                icon={category.icon}
                size={24}
                color="#316BFF"
              />
            </div>

            <div className="text-center">
              <p className="text-[15px] font-semibold text-[#1B1530] capitalize">
                {category.name}
              </p>

            </div>
          </Rb_Button>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;