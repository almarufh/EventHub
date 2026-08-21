import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import SignIn from "./pages/auth/SignIn.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import ForgotPasword from "./pages/auth/ForgotPasword.jsx";
import Explore from "./pages/Explore.jsx";
import Events from "./pages/events/Events.jsx";
import MyEvents from "./pages/myevents/MyEvents.jsx";
import SuccesPassword from "./pages/auth/SuccesPassword.jsx";
import CommunitiesLayout from "./layout/CommunitiesLayout.jsx";
import CommunitieDetail from "./pages/communities/CommunitieDetail.jsx";
import EventsCommunities from "./pages/communities/EventsCommunities.jsx";
import MembersCommunities from "./pages/communities/MembersCommunities.jsx";
import EventsLayout from "./layout/EventsLayout.jsx";
import DiscussionCommunities from "./pages/communities/DiscussionCommunities.jsx";
import DetailEvent from "./pages/events/DetailEvent.jsx";
import Upcomming from "./pages/myevents/Upcomming.jsx";
import Past from "./pages/myevents/Past.jsx";
import Saved from "./pages/myevents/Saved.jsx";
import MyProfile from "./pages/myprofile/MyProfile.jsx";
import ProfileEvents from "./pages/myprofile/ProfileEvents.jsx";
import ProfileComunities from "./pages/myprofile/ProfileComunities.jsx";
import ProfileSaved from "./pages/myprofile/ProfileSaved.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to='explore' replace />
      },
      {
        path: 'communities',
        children: [
          {
            index: true,
            element: <CommunitiesLayout/>
          },
          {
            path: ':id',
            element: <CommunitieDetail />,
            children: [
              {
                index: true,
                element: <Navigate to="events" replace/>
              },
              {
                path: "members",
                element: <MembersCommunities/>
              },
              {
                path: "events",
                element: <EventsCommunities/>
              },
              {
                path: "discussion",
                element: <DiscussionCommunities/>
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
            path: ':id',
            element: <DetailEvent/>
          },
        ]
      },
      {
        path: 'myevents',
        element: <MyEvents />,
        children: [
          {
            index: true,
            element: <Navigate to=":id" replace />
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <Navigate to="upcoming" replace />
              },
              {
                path: "upcoming",
                element: <Upcomming/>
              },
              {
                path: "past",
                element: <Past/>
              },
              {
                path: "saved",
                element: <Saved/>
              }
            ]
          }
        ]
      },
      {
        path: "myprofile",
        // element: <MyProfileLayout/>
        element: <MyProfile/>,
        children: [
          {
            index: true,
            element: <Navigate to=":id" replace/>
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <Navigate to="events" replace />
              },
              {
                path: "events",
                element: <ProfileEvents/>
              },
              {
                path: "communities",
                element: <ProfileComunities />
              },
              {
                path: "saved",
                element: <ProfileSaved />
              }
            ]
          }
        ]
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
  },
  {
    path: "*",
    element: <Navigate to='explore' replace />
  }
])

function App () {
  return (
    <RouterProvider router={router}/>
  )
}

export default App