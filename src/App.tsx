import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
	RouterProps,
} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Authorization from "./layouts/Authorization";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import { RouterInfo } from "./model/RouterInfo";

const ReactRouterObject = createBrowserRouter(
	RouterInfo.map((routerInfo) => {
		return routerInfo.withAuthorization
			? {
					path: routerInfo.path,
					element: (
						<Authorization>
							<Header />
							<main className="flex">
								<SideBar />
								{routerInfo.element}
							</main>
						</Authorization>
					),
			  }
			: {
					path: routerInfo.path,
					element: routerInfo.element,
			  };
	})
);

function App() {
	return <RouterProvider router={ReactRouterObject} />;
}

export default App;
