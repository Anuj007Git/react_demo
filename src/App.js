import './App.css'
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import Slider from "./components/Layouts/Slider/Slider";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />, 
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);
  return (
    <>
    {/* <Header />
    <Slider />
    <Footer /> */}
    <RouterProvider router={router} />
  </>
  )
}

export default App;
