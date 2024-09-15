import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "/register",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router