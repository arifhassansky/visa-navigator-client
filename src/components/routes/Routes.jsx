import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Home";
import AllVisas from "../pages/AllVisas";
import Error from "../Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVisa from "../pages/AddVisa";
import VisaDetails from "../VisaDetails";
import PrivateRoute from "../PrivateRoute";
import MyVisaApplications from "../pages/MyVisaApplications";
import MyAddedVisas from "../pages/MyAddedVisas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allVisas",
        element: <AllVisas />,
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/visaDetails/${params.id}`),
      },
      {
        path: "/myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "/MyVisaApplications",
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
