import './App.css'
import Landing from './components/landingPage/Landing.jsx'
import About from './components/aboutPage/about.jsx'
import Contact from './components/contactPage/Contact.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
// Import React router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Creating router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element:<Contact />
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
