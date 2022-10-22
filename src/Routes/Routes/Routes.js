import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import TermsAndCondition from "../../Pages/Other/TermsAndCondition/TermsAndCondition";
import Profile from "../../Pages/Profile/Profile";
import Login from "../../Pages/UserInfo/Login";
import Register from "../../Pages/UserInfo/Register";
import PriveteRoute from "../PriveteRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                loader: () => fetch('https://dragon-news-server-two-pink.vercel.app/news'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('https://dragon-news-server-two-pink.vercel.app/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-two-pink.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`https://dragon-news-server-two-pink.vercel.app/news/${params.id}`),
                element: <PriveteRoute><News></News></PriveteRoute>
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/profile', element: <PriveteRoute><Profile></Profile></PriveteRoute> },
            { path: '/terms', element: <TermsAndCondition></TermsAndCondition> },
            { path: '/about', element: <About></About> },
        ]
    }
])