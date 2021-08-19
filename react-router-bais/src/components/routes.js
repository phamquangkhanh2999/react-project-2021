import Home from './Home';
import About from './About';
import Contac from './Contac';
import NotFound from './NotFound';
import React from 'react';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/about',
    exact: false,
    main: () => <About />,
  },
  {
    path: '/concat',
    exact: false,
    main: () => <Contac />,
  },
  {
    path: '/',
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
