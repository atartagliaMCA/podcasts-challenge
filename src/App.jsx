import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Episode, Navbar, PodcastDetails } from "./components";
import { PodsPage, ErrorPage, PodcastPage } from "./pages";

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PodsPage />,
      },
      {
        path: "/podcast/:podcastId",
        element: <PodcastPage />,
        children: [
          {
            path: "/podcast/:podcastId/episode/:episodeId",
            element: <Episode />,
          },
          { path: "/podcast/:podcastId", element: <PodcastDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
