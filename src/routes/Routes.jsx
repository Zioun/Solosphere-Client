import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from './../pages/Authentication/Login';
import Register from './../pages/Authentication/Register';
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
]);

export default Router