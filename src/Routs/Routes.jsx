import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Payges/Home/Home/Home";
import Category from "../Payges/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Payges/News/News/News";




const router = createBrowserRouter([
    {
       path: '/',
       element: <Layout></Layout> ,
       children:[
        {
            path:'/',
            element:<Category></Category>,
            loader:()=> fetch('http://localhost:5000/news')
        },
        {
            path:'/category/:id',
            element: <Category></Category>,
            loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)

        },
      
       ] 
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
])
export default router;