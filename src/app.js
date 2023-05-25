import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Outlet} from "react-router-dom"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import {createBrowserRouter ,  RouterProvider} from "react-router-dom";
import UserDetails from "./components/UserDetails"
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

const Posts = lazy(() => import("./components/Posts"));

const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/user_details/:user_id",
                element: <UserDetails />,
            },
            {
                path: "/posts/:post_id",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Posts />
                    </Suspense>
                )
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)