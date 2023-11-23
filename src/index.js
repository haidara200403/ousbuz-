import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.js';
//import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projects',
    element: <Projects />
  },
]);

// Assuming there is an HTML element with an id of 'root' in your HTML file.
const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
  rootElement
);
