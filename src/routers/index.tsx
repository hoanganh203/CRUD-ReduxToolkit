import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Cart from "../pages/cart"
import Admin from "../pages/Admin"
import ListProduct from "../component/ListProduct"
import UpdateProduct from "../component/UpdateProduct"
import AddProduct from "../component/Addproduct"
import Detail from "../pages/Detail"


export const router = createBrowserRouter([
    {
        path: "/",
        element: (<><Outlet /></>),
        children: [
            { index: true, element: <div><Home /></div> },
            { path: "cart", element: <div><Cart /></div> },
            { path: "detail/:id", element: <div><Detail /></div> },
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
            { path: 'update/:id', element: <UpdateProduct /> }

        ],
    },
    { path: "*", element: "Not Found Page" },


])