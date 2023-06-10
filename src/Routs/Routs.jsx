import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Ragister from "../pages/Ragister/Ragister";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        
      ]
    },
    {
        path: 'register',
        element: <Ragister></Ragister>
    }
   
  ]);

export default router;