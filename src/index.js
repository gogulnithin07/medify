import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//

import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import Bookings from "./Pages/Bookings/Booking";
import Search from "./Pages/Search/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="booking" element={<Bookings />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<h1>not found</h1>} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
