import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from '../Home';
import JavaView from '../Java';
import SpringBootView from '../SpringBoot'

const routes = [
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/java',
    element: <JavaView />,
  },
  {
    path: '/spring_boot',
    element: <SpringBootView />,
  },
  
];

const renderRoutes = (searchResults) => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={React.cloneElement(route.element, { searchResults })}
        />
      ))}
    </Routes>
  );
};

export default renderRoutes;
