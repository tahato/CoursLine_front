import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import Student from "./Pages/student/Student.jsx";
import ResetPassWord from "./Pages/ResetPassWord/ResetPassWord.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import Contact from "./Pages/Contact/Contact.jsx";
import Teacher from "./Pages/Teacher/Teacher.jsx";
import MyCourses from "./Pages/MyCourses/MyCourses.jsx";
import CreateCourse from "./Pages/CreateCourse/CreateCourse.jsx";
import MyClasses from "./Pages/MyClasses/MyClasses.jsx";
import Classes from "./Pages/Classes/Classes.jsx";
import CreateClasse from "./Pages/CreateClasse/CreateClasse.jsx";
import Meet from "./Pages/Meet/Meet.jsx";
import AllCourses from "./Pages/AllCourses/AllCourses.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import EditClasse from "./Pages/EditClasse/EditClasse.jsx";
import About from "./Pages/About/About.jsx";
import MainCourses from "./Pages/MainCourses/MainCourses.jsx";

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
    children: [
      {
        path: "myCourses",
        element: <MyCourses />,
      },
      {
        path: "allCourses",
        element: <AllCourses />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "classes/:courseId",
        element: <Classes />,
      },
      {
        path: "myClasses",
        element: <MyClasses />,
      },
    ],
  },
  {
    path: "/teacher",
    element: <Teacher />,
    children: [
      {
        path: "allCourses",
        element: <AllCourses />,
      },
      {
        path: "myCourses",
        element: <MyCourses />,
      },
      {
        path: "createCourse",
        element: <CreateCourse />,
      },
      {
        path: "myClasses",
        element: <MyClasses />,
      },
      {
        path: "classes/:courseId",
        element: <Classes />,
      },
      {
        path: "createClasse/:courseId",
        element: <CreateClasse />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editClasse/:id",
        element: <EditClasse />,
      },
    ],
  },
  {
    path: "/resetpassword",
    element: <ResetPassWord />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/meet/:classeId",
    element: <Meet />,
  },
  {
    path: "mainCourses",
    element: <MainCourses />,
    children:[
      {
        path: "allCourses",
        element: <AllCourses />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
