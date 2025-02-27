import Home from "../pages/Home";
import About from "../pages/About";
import HowItWorks from "../pages/HowItWorks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import TutorPage from "../pages/TutorPage";
// import DashBoard from "../pages/Dashboard";
import GigsDash from "../pages/GigsDash";
import DashBoard from "@/pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/tutor-finder-page",
    element: <TutorPage />,
  },
  {
    path: "/dash-board-page",
    element: <DashBoard />,
  },
  {
    path: "/gigs-dash",
    element: <GigsDash />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
