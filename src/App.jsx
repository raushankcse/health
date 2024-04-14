import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';



import './App.css'
import Landing from './components/landingPage/Landing'
import About from './components/aboutPage/About'
import Contact from './components/contactPage/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
// Import React router dom

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




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Landing />}>

//       <Route index element={<Landing />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
      
//     </Route>
//   )
// )




function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
