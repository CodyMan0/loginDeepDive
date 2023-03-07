import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

interface RouterItem {
	path: string;
	element: JSX.Element;
	withAuthorization: boolean;
	label: string;
	icon?: JSX.Element;
}

export const RouterInfo: RouterItem[] = [
	{
		path: "/",
		element: <LoginPage />,
		withAuthorization: false,
		label: "로그인",
	},
	{
		path: "/page",
		element: <HomePage />,
		withAuthorization: true,
		label: "홈페이지",
	},
	{
		path: "/page/:id",
		element: <DetailPage />,
		withAuthorization: true,
		label: "상세 페이지 ",
	},
];
