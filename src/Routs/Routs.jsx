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
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass/MyClass";
import SelectedClasses from "../pages/Dashboard/Students/SelectedClasses";
import EnrolledClasses from "../pages/Dashboard/Students/EnrolledClasses";
import Payment from "../pages/Dashboard/Students/Payments/Payment";

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
        },
        // instructor's routs
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myClass',
          element: <MyClass></MyClass>
        },
        //students's routs
        {
          path: 'selectedClasses',
          element: <SelectedClasses></SelectedClasses>
        },
        {
          path: 'enrolledClassess',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'payments',
          element: <Payment></Payment>
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