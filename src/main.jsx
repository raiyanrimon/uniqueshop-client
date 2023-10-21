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
import BrandPage from "./components/BrandPage";
import SingleProduct from "./components/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://unique-shop-server-75yzugdl5-golam-raiyans-projects.vercel.app/brand"
          ),
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
        loader: () =>
          fetch(
            "https://unique-shop-server-75yzugdl5-golam-raiyans-projects.vercel.app/cart"
          ),
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
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
        path: "/update/:product/:id",
        loader: ({ params }) =>
          fetch(
            `https://unique-shop-server-75yzugdl5-golam-raiyans-projects.vercel.app/product/${params.product}/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:product",
        element: <BrandPage></BrandPage>,
        loader: ({ params }) =>
          fetch(
            `https://unique-shop-server-75yzugdl5-golam-raiyans-projects.vercel.app/product/${params.product}`
          ),
      },
      {
        path: "/products/:product/:id",
        element: (
          <PrivateRoute>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://unique-shop-server-75yzugdl5-golam-raiyans-projects.vercel.app/product/${params.product}/${params.id}`
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
