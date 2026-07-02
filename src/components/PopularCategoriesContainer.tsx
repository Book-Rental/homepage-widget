import React from "react";
import PopularCategories from "./PopularCategories";
import { getCategoryStyle } from "../utils/categoryIcons";
import { Category } from "../types";

const staticCategoryNames = [
    "fantasy",
    "mystery",
    "thriller",
    "romance",
    "young adult",
    "historical fiction",
    "biography",
    "self-help",
    "business",
    "technology",
    "cooking",
    "horror",
];
const staticBookCounts = [1200, 850, 650, 500, 400, 300, 250, 600, 700, 900, 350, 200];

const staticCategories: Category[] = staticCategoryNames.map((name, index) => {
    const { icon, accent } = getCategoryStyle(name);
    return {
        id: `static-${index}`,
        name,
        bookCount: staticBookCounts[index] ?? 0,
        accent,
        icon,
    };
});

const PopularCategoriesContainer: React.FC = () => {
    return <PopularCategories categories={staticCategories} />;
};

export default PopularCategoriesContainer;