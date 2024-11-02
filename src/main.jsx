import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import BookDatails from './component/BookDatails/BookDatails';
import ReadList from './component/ReadList/ReadList';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/readList',
        element: <ReadList></ReadList>
      },
      {
        path: 'book/:bookId',
        element: <BookDatails></BookDatails>,
        loader: () => fetch('booksData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
