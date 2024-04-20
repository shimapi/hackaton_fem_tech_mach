import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Login from "./views/Login";
import Page404 from "./views/Page404";
import Register from "./views/Register";
import Home from "./views/Home";

function App() {
	const BrowserRouter = createBrowserRouter([
		{
			errorElement: <Page404 />,

			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/register",
					element: <Register />,
				},
				{
					path: "/login",
					element: <Login />,
				},
			],
		},
	]);
	return <RouterProvider router={BrowserRouter} />;
}

export default App;
