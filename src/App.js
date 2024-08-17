import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import RoomsDetails from './pages/RoomsDetails';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/room/:id",
    element: <RoomDetails />
  },
  {
    path: "/rooms/:id",
    element: <RoomsDetails />
  }

])
const App = () => {
  return <div>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>;
};

export default App;
