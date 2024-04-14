import './App.css'
import Landing from './components/landingPage/landing'
import About from './components/aboutPage/about'
import Contact from './components/contactPage/contact'

import 'bootstrap/dist/css/bootstrap.min.css';
// Import React router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Creating router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div ><Landing /></div>
  },
  {
    path: '/about',
    element: <div ><About /></div>
  },
  {
    path: '/contact',
    element: <div ><Contact /></div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
