import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Notes from './pages/Notes';
import Users from './pages/Users';
import PageError from './pages/PageError';
import Error from './pages/Error';
import SingleNote from './pages/SingleNote';
import Login from './pages/Login';
import { useEffect, useState } from 'react';

const RedirectToLogin = ({ loggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Az itteni logikát módosíthatod, hogy megfeleljen a te alkalmazásodnak.
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate, loggedIn]);

  return null;
};

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (user) => {
    setUser(user);
  };
  console.log(loggedIn);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: loggedIn ? <Landing /> : <RedirectToLogin />,
          errorElement: <PageError />,
        },
        { path: '/notes', element: <Notes />, errorElement: <PageError /> },
        { path: '/users', element: <Users />, errorElement: <PageError /> },
      ],
    },
    { path: '/notes/:id', element: <SingleNote />, errorElement: <Error /> },
    {
      path: '/login',
      element: <Login onLogin={login} setLoggedIn={setLoggedIn} />,
      errorElement: <PageError />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <RedirectToLogin loggedIn={loggedIn} />
    </RouterProvider>
  );
}

export default App;
