import {
  FaBook, FaLaptopCode, FaBriefcase, FaHandsHelping, FaLandmark, FaFlask,
  FaMask, FaHeart, FaUserFriends, FaUtensils, FaPlane, FaFeatherAlt,
  FaHatWizard, FaSearch, FaBolt, FaGraduationCap, FaPray, FaChild, FaGhost,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface CategoryStyle {
    icon: IconType;
    accent: string;
}

export const categoryStyleMap: Record<string, CategoryStyle> = {
  fantasy: { icon: FaHatWizard, accent: '#e4f0fb' },
  mystery: { icon: FaSearch, accent: '#dcedf7' },
  thriller: { icon: FaBolt, accent: '#e1f2f6' },
  romance: { icon: FaHeart, accent: '#e9f1fa' },
  'historical fiction': { icon: FaLandmark, accent: '#eef3f8' },
  biography: { icon: FaUserFriends, accent: '#e6f4f1' },
  autobiography: { icon: FaFeatherAlt, accent: '#e6f4f1' },
  'self-help': { icon: FaHandsHelping, accent: '#dfeefb' },
  business: { icon: FaBriefcase, accent: '#e8eef6' },
  technology: { icon: FaLaptopCode, accent: '#dceafb' },
  'health & wellness': { icon: FaHeart, accent: '#e3f2ef' },
  cooking: { icon: FaUtensils, accent: '#f0f4f8' },
  travel: { icon: FaPlane, accent: '#d9edf5' },
  poetry: { icon: FaFeatherAlt, accent: '#eaeef8' },
  'comics & graphic novels': { icon: FaMask, accent: '#e5f0f6' },
  education: { icon: FaGraduationCap, accent: '#dfeefb' },
  'religion & spirituality': { icon: FaPray, accent: '#eef3f8' },
  'young adult': { icon: FaChild, accent: '#e3f2ef' },
  horror: { icon: FaGhost, accent: '#e9edf1' },
  fiction: { icon: FaBook, accent: '#dceafb' },
  science: { icon: FaFlask, accent: '#dceafb' },
  history: { icon: FaLandmark, accent: '#eef3f8' },
};

export const getCategoryStyle = (name: string): CategoryStyle =>
  categoryStyleMap[name.toLowerCase()] ?? { icon: FaBook, accent: '#f1f5f9' };