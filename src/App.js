import React from 'react';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';
import RootLayout from './Pages/Root';
import HomePage from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Blogs from './Pages/Blogs';
import WritePost from './Pages/WritePost';
import BlogDetail from './Pages/BlogDetail';
import NotFoundPage from './Pages/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<NotFoundPage></NotFoundPage>,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/write-post', element: <WritePost /> },
      { path: '/readmore/:blogId', element: <BlogDetail /> },
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={routes}/>
   
  );
}

export default App;
