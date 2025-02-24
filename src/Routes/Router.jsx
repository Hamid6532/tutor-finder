import Home from "../pages/Home";
import About from "../pages/About";
import HowItWorks from "../pages/HowItWorks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Components/LandingPage";

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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
