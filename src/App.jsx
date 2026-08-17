import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import ForgotPasword from "./pages/auth/ForgotPasword.jsx";
import Explore from "./pages/Explore.jsx";
import Events from "./pages/events/Events.jsx";
import Communities from "./pages/communities/Communities.jsx";
import MyEvents from "./pages/MyEvents.jsx";
import SuccesPassword from "./pages/auth/SuccesPassword.jsx";
import CommunitiesLayout from "./layout/CommunitiesLayout.jsx";
import CommunitieDetail from "./pages/communities/CommunitieDetail.jsx";
import EventsCommunities from "./pages/communities/EventsCommunities.jsx";
import MembersCommunities from "./pages/communities/MembersCommunities.jsx";
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
        path: 'communities',
        element: <CommunitiesLayout/> ,
        children: [
          {
            index: true,
            element: <Communities/>
          },
          {
            path: ':id',
            element: <CommunitieDetail />,
            children: [
              {
                index: true,
                element: <EventsCommunities/>
              },
              {
                path: "members",
                element: <MembersCommunities/>
              }
            ]
          }
        ]
      },
      {
        path: 'events',
        element: <EventsLayout/>,
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