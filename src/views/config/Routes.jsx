import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Java from '../Java';
import SpringBoot from '../SpringBoot'
import Microservices from '../Microservices';
import Api from '../Api'
import HtmlCss from '../HtmlCss';
import Javascript from '../Javascript'
import Tailwind from '../Tailwind'
import Git from '../Git'
import Docker from '../Docker'
import Database from '../Database'
import RepoHosting from '../RepoHosting'
import Testing from '../Testing'
import CICD from '../CICD'
import Nodejs from '../Nodejs'
import Vite from '../Vite'
import Linux from '../Linux'
import Reactjs from '../Reactjs'


const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/html&css',
    element: <HtmlCss />,
  },
  {
    path: '/java',
    element: <Java />,
  },
  {
    path: '/spring_boot',
    element: <SpringBoot />,
  },
  {
    path: '/api',
    element: <Api />,
  },
  {
    path: '/microservices',
    element: <Microservices />,
  },
  {
    path: '/javascript',
    element: <Javascript />,
  },
  {
    path: '/tailwind',
    element: <Tailwind />,
  },
  {
    path: '/git',
    element: <Git />,
  },
  {
    path: '/docker',
    element: <Docker />,
  },
  {
    path: '/database',
    element: <Database />,
  },
  {
    path: '/repos',
    element: <RepoHosting />,
  },
  {
    path: '/testing',
    element: <Testing />,
  },
  {
    path: '/ci_cd',
    element: <CICD />,
  },
  {
    path: '/nodejs',
    element: <Nodejs />,
  },
  {
    path: '/vite',
    element: <Vite />,
  },
  {
    path: '/linux',
    element: <Linux />,
  },
  {
    path: '/reactjs',
    element: <Reactjs />,
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
