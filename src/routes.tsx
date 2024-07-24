import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Page/Home/Homepage";
import ErrPopup from "./Page/ERR/ErrPopup";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
    errorElement: <ErrPopup />,
  },
]);
