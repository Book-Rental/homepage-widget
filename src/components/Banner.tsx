import React from 'react';
import bannerImage from '../assets/congerdesign-a-book-1771073_1920.jpg';

interface BannerProps {
    onBrowseClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({ onBrowseClick }) => {
  return (
    <section className="relative min-h-[500px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden flex items-center">
      <img
        src={bannerImage}
        alt="Books Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-2xl px-12 py-16 text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-300">
                    Unlimited reading, zero clutter
        </p>
        <h1 className="mb-5 text-5xl font-bold leading-tight">
                    Borrow the story.
          <br />
                    Skip the shelf.
        </h1>
        <p className="mb-8 text-lg text-gray-200">
                    Choose from thousands of titles across every genre and rent at
                    prices that make sense.
        </p>
        <button
          onClick={onBrowseClick}
          className="rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white hover:bg-orange-700"
        >
                    Browse Books
        </button>
      </div>
    </section>
  );
};

export default Banner;