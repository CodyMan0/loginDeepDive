import { useNavigate } from "react-router-dom";

interface AuthorizationProps {
	children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
	const isLogged = Boolean(localStorage.getItem("token"));
	console.log("logged", isLogged);
	const navigate = useNavigate();

	if (!isLogged) {
		navigate("/");
		return <>로그인 페이지로 이동합니다...</>;
	}

	return <>{children}</>;
};

export default Authorization;
