import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Match from "./Pages/Match";
import Report from "./Pages/Report";


export default [
    {
    path:'/',
    component: Home
    },
    {
    path:'/login',
    component: Login
    },
    {
    path:'/register',
    component: Register
    },
    {
    path:'/report',
    component: Report
    },
    {
    path:'/match',
    component: Match
    },
]