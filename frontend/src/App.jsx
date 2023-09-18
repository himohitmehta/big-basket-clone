import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import ErrorPage from "./components/error";
import IndexPage from "./routes";
import { loader as productsLoader } from "./routes/index";
import { loader as rootLoader } from "./layout/AppLayout";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { persistor, store } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { CookiesProvider } from "react-cookie";
import { Toaster, toast } from "sonner";
import AdminPage from "./routes/admin";

//  the router to handle the routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <IndexPage />,
						loader: productsLoader,
					},
					{
						path: "/admin",
						element: <AdminPage />,
					},
					{
						path: "/:category",
						// element: <IndexPage />,
						children: [
							{
								index: true,
								element: <IndexPage />,
							},
							{
								path: ":subCategory",
								element: <IndexPage />,
							},
						],
					},
				],
			},
		],
	},
]);

// The App Component that will be rendered
function App() {
	return (
		<>
			<CookiesProvider defaultSetOptions={{ path: "/" }}>
				{/* Redux provider */}
				<Provider store={store}>
					{/* Persistor to persist the redux state */}
					<PersistGate persistor={persistor}>
						{/* mui theme provider to setup the theme */}
						<ThemeProvider theme={theme}>
							{/* The router provider for handling all routes in the app */}
							<Toaster
								position="top-center"
								expand={false}
								richColors
								closeButton
							/>
							<RouterProvider router={router} />
						</ThemeProvider>
					</PersistGate>
				</Provider>
			</CookiesProvider>
		</>
	);
}

export default App;
