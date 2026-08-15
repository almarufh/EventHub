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
import SuccesPassword from "./pages/auth/SuccesPassword.jsx";
import EventsLayout from "./layout/EventsLayout.jsx";

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
        element: <EventsLayout/> ,
        children: [
          {
            index: true,
            element: <Events/>
          },
          {
            path: 'detail',
            element: <Events/>
          },
        ]
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
        element: <Navigate to='signin' replace />
      },
      {
        path: 'signin',
        element: <SignIn/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'password',
        element: <ForgotPasword/>
      },
      {
        path: "success",
        element: <SuccesPassword/>
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