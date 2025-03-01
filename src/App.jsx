import { Outlet } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
}, []);

  return (
    <div>
      <h1>Welcome to the App</h1>
    <Outlet/>
    </div>
  )
}

export default App