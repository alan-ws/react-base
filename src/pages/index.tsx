import { useRoutes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
}

export default App;
