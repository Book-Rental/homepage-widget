import 'swiper/css';
import 'swiper/css/pagination';
import HomePage from './pages/HomePage';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '@rentbook/rentbook-ui-lib/microfrontend.min.css'
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </>
  );
}

export default App;
