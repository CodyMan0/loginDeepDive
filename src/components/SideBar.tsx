import { Link, useParams } from "react-router-dom";

const SideBar = () => {
	const sideBarMenus = [
		{ id: 1, name: "Page A", path: "1" },
		{ id: 2, name: "Page B", path: "2" },
		{ id: 3, name: "Page C", path: "3" },
	];

	const params = useParams();
	const id = params.id;
	return (
		<ul className=" w-48 h-screen border-r 1px solid #ccc ">
			{sideBarMenus.map((menu) => (
				<li className="ml-10 mt-5" key={menu.id}>
					<Link to={`/page/${menu.path}`} className="hover:text-gray-400">
						{menu.name}
					</Link>
				</li>
			))}
		</ul>
	);
};
export default SideBar;
