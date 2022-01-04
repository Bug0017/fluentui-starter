 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query';
import {
  Router,
  Outlet,
  ReactLocation,
  createMemoryHistory,
} from "react-location";
import { routes } from './routes';
const memoryHistory  = createMemoryHistory();
const location = new ReactLocation({ history: memoryHistory });
const queryClient = new QueryClient();

export default () => {

    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Router location={location} routes={routes}>
            <Outlet />
          </Router>
        </QueryClientProvider>
      </>
    );
}