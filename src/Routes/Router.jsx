import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import TutorPage from "../pages/TutorPage";
import LearnerPage from "@/pages/LearnerPage";
import TutorBoard from "@/pages/TutorBoard";


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
    path: "/learner-page",
    element: <LearnerPage />,
  },
  {
    path: "/tutor-board",
    element: <TutorBoard />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
