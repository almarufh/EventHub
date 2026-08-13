import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "./pages/MainLayout.jsx";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import ForgotPasword from "./pages/auth/ForgotPasword.jsx";
import Events from "./pages/Events.jsx";
import Explore from "./pages/Explore.jsx";
import Communities from "./pages/Communities.jsx";
import MyEvents from "./pages/MyEvents.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to='events' replace />
      },
      {
        path: 'events',
        element: <Events/>
      },
      {
        path: 'communities',
        element: <Communities/>
      },
      {
        path: 'myevents',
        element: <MyEvents/>
      },
      {
        path: 'explore',
        element: <Explore/>
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to='sigin' replace />
      },
      {
        path: 'sign',
        element: <SignIn/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'password',
        element: <ForgotPasword/>
      }
    ]
  }
])

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App