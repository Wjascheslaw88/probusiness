import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "./pages/aboutPage/AboutPage";
import { HeaderPage } from "./pages/headerPage/HeaderPage";
import { FooterPage } from "./pages/footerPage/FooterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage title={"about"} />,
  },
  {
    path: "/header",
    element: <HeaderPage />,
  },
  {
    path: "/footer",
    element: <FooterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
