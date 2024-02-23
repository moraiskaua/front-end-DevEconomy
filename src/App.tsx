import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './router';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />;
    </QueryClientProvider>
  );
}

export default App;
