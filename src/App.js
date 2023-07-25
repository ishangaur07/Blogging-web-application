import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Blogs from './Pages/Blogs';
import WritePost from './Pages/WritePost';
import RootLayout from './Pages/Root';

// 
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      { path: '/', element: <HomePage /> },
      {path:'/about-us',element:<AboutUs></AboutUs>},
      {path:'/blogs',element:<Blogs></Blogs>},
      {path:'/write-post',element:<WritePost></WritePost>}
    ]
},
])


function App() {
  return <RouterProvider router={router} />;
  
}

export default App;
