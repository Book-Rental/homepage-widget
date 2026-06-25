import React from "react";
import { Category } from "../types";

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
        <section className="mt-12">
            <div className="mb-4.5 flex items-baseline justify-between">
                <h2 className="text-xl font-bold text-[#1b1530]">
                    Popular categories
                </h2>
                <button
                    onClick={onViewAllClick}
                    className="p-1 text-sm font-semibold text-[#e2543d] hover:underline"
                >
                    View all
                </button>
            </div>

            <div className="flex gap-24 mt-6 ">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onCategoryClick?.(category)}
                        className="flex flex-col items-start gap-2.5 rounded-2xl border border-[#ece8f0] bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#e2543d] hover:shadow-[0_8px_18px_rgba(27,21,48,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2543d]"
                    >
                        <span
                            className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-lg"
                            style={{ background: category.accent }}
                        >
                            {category.icon}
                        </span>
                        <span className="text-sm font-semibold text-[#1b1530]">
                            {category.name}
                        </span>
                        <span className="text-xs text-[#5b5470]">
                            {formatCount(category.bookCount)} Books
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;