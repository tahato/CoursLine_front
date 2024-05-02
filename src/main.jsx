import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import Student from "./Pages/student/Student.jsx";
import ResetPassWord from "./Pages/ResetPassWord/ResetPassWord.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store.js"
import Contact from "./Pages/Contact/Contact.jsx";
import Teacher from "./Pages/Teacher/Teacher.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassWord />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
