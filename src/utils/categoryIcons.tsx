import {
    FaBook,
    FaLaptopCode,
    FaBriefcase,
    FaHandsHelping,
    FaLandmark,
    FaFlask,
    FaMask,
    FaHeart,
    FaUserFriends,
    FaUtensils,
    FaPlane,
    FaFeatherAlt,
    FaHatWizard,
    FaSearch,
    FaBolt,
    FaGraduationCap,
    FaPray,
    FaChild,
    FaGhost,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface CategoryStyle {
    icon: IconType;
    accent: string;
}

export const categoryStyleMap: Record<string, CategoryStyle> = {
    fantasy: { icon: FaHatWizard, accent: "#f3e8ff" },
    mystery: { icon: FaSearch, accent: "#e0f2fe" },
    thriller: { icon: FaBolt, accent: "#fee2e2" },
    romance: { icon: FaHeart, accent: "#ffe4e6" },
    "historical fiction": { icon: FaLandmark, accent: "#fef3c7" },
    biography: { icon: FaUserFriends, accent: "#dcfce7" },
    autobiography: { icon: FaFeatherAlt, accent: "#dcfce7" },
    "self-help": { icon: FaHandsHelping, accent: "#dbeafe" },
    business: { icon: FaBriefcase, accent: "#fde68a" },
    technology: { icon: FaLaptopCode, accent: "#e0e7ff" },
    "health & wellness": { icon: FaHeart, accent: "#fce7f3" },
    cooking: { icon: FaUtensils, accent: "#ffedd5" },
    travel: { icon: FaPlane, accent: "#cffafe" },
    poetry: { icon: FaFeatherAlt, accent: "#f3e8ff" },
    "comics & graphic novels": { icon: FaMask, accent: "#fef9c3" },
    education: { icon: FaGraduationCap, accent: "#dbeafe" },
    "religion & spirituality": { icon: FaPray, accent: "#fef3c7" },
    "young adult": { icon: FaChild, accent: "#dcfce7" },
    horror: { icon: FaGhost, accent: "#e5e7eb" },
    fiction: { icon: FaBook, accent: "#dbeafe" },
    science: { icon: FaFlask, accent: "#dbeafe" },
    history: { icon: FaLandmark, accent: "#fef3c7" },
};

export const getCategoryStyle = (name: string): CategoryStyle =>
    categoryStyleMap[name.toLowerCase()] ?? { icon: FaBook, accent: "#f3f4f6" };