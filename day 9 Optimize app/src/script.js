import React, { lazy,Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import {Header} from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
//import Grocery from "./Components/Grocery";

//Chunking
// CodeSpliting
// Dynamic Bundling
//Lazy Loading
// On Demand Loading
// dynamic import

const Grocery = lazy(()=>import("./Components/Grocery"));
const About = lazy(()=>import("./Components/About"));

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
                      
        </div>
    );
};
const  appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>
            }, 
            {
                path: "/contact",
                element: <Contact/>
            }, 
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }, 
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }, 
        ],            
    // this for handling error in router
        errorElement: <Error/>,
    },
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);