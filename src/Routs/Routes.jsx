import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Category from "../Payges/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Payges/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Payges/Login/Login/Login";
import Register from "../Payges/Login/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Trams from "../Payges/Sheard/Trams/Trams";




const router = createBrowserRouter([
    {
path: '/',
element:<LoginLayout></LoginLayout>,
children:[
    {
        path:'/',
        element: <Navigate to="/category/0"></Navigate>
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: 'trams',
        element: <Trams></Trams>
    }
]
    },
    {
       path: 'category',
       element: <Layout></Layout> ,
       children:[
     
        {
            path:':id',
            element: <Category></Category>,
            loader: ({params})=> fetch(`https://the-news-deagon-server-hridoy281810.vercel.app/categories/${params.id}`)

        },
      
       ] 
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
            
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({params})=> fetch(`https://the-news-deagon-server-hridoy281810.vercel.app/news/${params.id}`)
            }
        ]
    },
])
export default router;