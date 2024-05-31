import React from 'react'
import HomePage from './routes/homePage/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import ListPage from './routes/listPage/ListPage';
import { RequireAuth, Layout} from './routes/layout/Layout';
import SinglePage from './routes/singlePage/SinglePage';
import ProfilePage from './routes/profile/ProfilePage';
import Register from './routes/register/register';
import Login from './routes/login/login';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import NewPostPage from './routes/newPostPage/newPostPage';
import { listPageLoder, singlePageLoader } from './lib/loaders';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/list',
        element: <ListPage />,
        loader: listPageLoder
      },
      {
        path: '/:id',
        element: <SinglePage />,
        loader: singlePageLoader,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/',
    element: <RequireAuth />,
    children: [
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/profile/update',
        element: <ProfileUpdatePage />
      },
      {
        path: '/add',
        element: <NewPostPage />
      },
    ],
    errorElement: <NotFound />,
  }


]);





const App = () => {
  return (

  
      <RouterProvider router={router} />
  

  )
}

export default App