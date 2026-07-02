
import React from "react";
import { Category } from "../types";
import { Rb_Anchor, Rb_Button, Rb_Icon } from "rentbook-ui-lib";

interface PopularCategoriesProps {
    categories: Category[];
    onCategoryClick?: (category: Category) => void;
    onViewAllClick?: () => void;
}

const formatCount = (count: number): string =>
    count >= 1000
        ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}k`
        : `${count}`;

const PopularCategories: React.FC<PopularCategoriesProps> = ({
    categories,
    onCategoryClick,
    onViewAllClick,
}) => {

    return (
        <section className="mx-auto mt-12 max-w-7xl px-4 mb-12">
            <div className="mb-4 flex items-baseline justify-between">
                <h2 className="text-xl font-bold text-[#1b1530]">
                    Popular Categories
                </h2>
                <Rb_Anchor
                    variant="underline"
                    onClick={onViewAllClick}
                    className="text-[#e2543d] hover:text-[#e2543d]"
                >
                    View all
                </Rb_Anchor>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {categories.map((category) => (
                    <Rb_Button
                        key={category.id}
                        onClick={() => onCategoryClick?.(category)}
                        className="group flex flex-col items-center gap-2 rounded-2xl border border-[#ece8f0] bg-white p-4 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#e2543d]/30 hover:bg-[#fff7f5] hover:shadow-[0_10px_24px_rgba(226,84,61,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2543d]"
                    >
                        <span
                            className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-lg transition-transform duration-300 ease-out group-hover:scale-110"
                            style={{ background: category.accent }}
                        >
                            <Rb_Icon icon={category.icon} size={18} color="#1b1530" />
                        </span>
                        <span className="text-sm font-semibold text-[#1b1530] capitalize transition-colors duration-300 group-hover:text-[#e2543d]">
                            {category.name}
                        </span>
                        <span className="text-xs text-[#5b5470]">
                            {formatCount(category.bookCount)}+ Books
                        </span>
                    </Rb_Button>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;