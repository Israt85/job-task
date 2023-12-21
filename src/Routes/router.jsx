import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Layout/Dashboard";
import Tasks from "../Pages/Dashboard/Tasks/Tasks";
import PreviousTask from "../Pages/Dashboard/PreviousTask/PreviousTask";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'tasks',
          element: <Tasks></Tasks>
        },
        {
          path: 'previoustask',
          element: <PreviousTask></PreviousTask>
        }
      ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
  ]);
  export default router;