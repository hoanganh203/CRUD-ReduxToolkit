

import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/cart"
import Admin from "../pages/Admin"
import { ListProduct } from "../pages/listProduct"
import { AddProduct } from "../pages/addProduct"
import { UpdateProduct } from "../pages/updateProduct"



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
            <Admin />
        ),
        children: [
            { index: true, element: <ListProduct /> },
            { path: 'add', element: <AddProduct /> },
            { path: 'update', element: <UpdateProduct /> }

        ],
    },
    { path: "*", element: "Not Found Page" },


])