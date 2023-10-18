import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Errorpage from "./components/Errorpage";
import Home from "./components/Home";
import AuthProvider from "./Provider/AuthProvider";
import Register from "./components/Register";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-product",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
