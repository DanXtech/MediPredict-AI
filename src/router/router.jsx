import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
import App from "../App";
import RegistrationForm from "../Pages/RegistrationForm";

const router = createBrowserRouter ([
{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>
        }
    ]
},
{
    path: "/registration",
    element: <RegistrationForm/>
},
])

export default router;
