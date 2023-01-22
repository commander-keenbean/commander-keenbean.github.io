import './index.css';
import App, {appLoader} from './containers/App';
import About, {aboutLoader}  from './routes/About';
import Projects, {projectsLoader}  from './routes/Projects';
import * as React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "about",
        element: <About />,
        loader: aboutLoader,
      },
    ],
  },
]);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

