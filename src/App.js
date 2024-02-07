import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from './components/Footer';
import Landing from './components/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Blog from './components/Blog';
import Navbar from "./components/Navbar";

const AppLayout=()=>{
  return(
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
}

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Landing/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/blog/:id",
        element: <Blog/>,
      },
    ],
  },

])

const App=()=> {
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
