import {FC} from "react";
import Home from "../components/Home/Home";
import UserPage from "../components/UserPage/UserPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";


interface routeInterface {
    path: string
    element: FC
}


export const privateRoutes: routeInterface[] = [
    {path: '/', element: Home},
    {path: '/user', element: UserPage},
    //till testing
    {path: '/login', element: Login},
    {path: '/registration', element: Registration},
]

export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '/registration', element: Registration},
]