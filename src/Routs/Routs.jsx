import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Ragister from "../pages/Ragister/Ragister";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import PrivateRout from "./PrivateRout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Allusers from "../pages/Dashboard/Admin/Allusers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:'classes',
            element: <PrivateRout><Classes></Classes></PrivateRout>
        },
        {
            path: 'instructors',
            element: <PrivateRout><Instructors></Instructors></PrivateRout>
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRout><DashboardLayout></DashboardLayout></PrivateRout>,
      children: [
        {
          path: 'users',
          element: <Allusers></Allusers>
        },
        {
          path: 'manageClasses',
          element: <ManageClasses></ManageClasses>
        }
      ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Ragister></Ragister>
    }
   
  ]);

export default router;