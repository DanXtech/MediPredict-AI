
import { createRoot } from 'react-dom/client'
import './index.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import  {RouterProvider}  from 'react-router-dom'
import router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}/>
 
)
