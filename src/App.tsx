import TrendingBooks from './components/TrendingBooks/TrendingBooks';

import 'swiper/css';
import 'swiper/css/pagination';
import PopularCategoriesContainer from './components/PopularCategoriesContainer';
import BookCarousel from './components/Carousel';


function App(
) {
  return (
    <div className="mx-auto ">

      < BookCarousel />
      <PopularCategoriesContainer />
      <div className="px-6 py-6">
        <div className="mx-auto max-w-5xl">
          <TrendingBooks />
        </div>
      </div>
    </div >
  )
}

export default App;