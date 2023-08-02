

import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/cart"
import Admin from "../pages/Admin"



export const router = createBrowserRouter([
    {
        path: "/",
        element: (<><Outlet /></>),
        children: [
            { index: true, element: <div><Home /></div> },
            { path: "cart", element: <div><Cart /></div> },
        ]
    },
    {
        path: "/admin",
        element: (
            <div>
                <Outlet />
            </div>
        ),
        children: [
            { index: true, element: <Admin /> },
        ],
    },
    { path: "*", element: "Not Found Page" },


])