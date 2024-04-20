import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import "./App.css";
import theme from './theme';
import Login from "./views/Login";
import Page404 from "./views/Page404";
import Register from "./views/Register";
import Home from "./views/Home";
import Layout from "./views/Layout";
import PathConstants from "./Routes/PathConstants";

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      element: <Layout />,

      errorElement: <Page404 />,

      children: [
        {
          path: PathConstants.HOME,
          element: <Home />,
        },
        {
          path: PathConstants.REGISTER,
          element: <Register />,
        },
        {
          path: PathConstants.LOGIN,
          element: <Login />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={BrowserRouter} />
    </ThemeProvider>
  );
}

export default App;
