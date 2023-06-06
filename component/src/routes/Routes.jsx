import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layout/DashboardLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: '' }
        ]
    },

]);

export default router;