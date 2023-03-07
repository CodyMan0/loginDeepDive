import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import { getUserInfo } from "../utils/user";

const LoginPage = () => {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({ name: "" });

	const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const loginResponse = await login(
			formData.get("email") as string,
			formData.get("password") as string
		);
		if (!loginResponse) return;

		const userInfo = await getUserInfo(loginResponse.token);
		if (!userInfo) return;

		setUserInfo(userInfo);

		localStorage.setItem("token", loginResponse.token);
		userInfo && navigate("/page");
	};

	return (
		<div className="w-full h-screen flex justify-center items-center bg-slate-200">
			<div className="w-80 h-auto bg-white rounded-md flex flex-col justify-center items-center gap-2">
				<h1 className="py-5 font-bold text-buttonColor ">임시 로그인</h1>
				<form
					onSubmit={submitHandler}
					className="flex flex-col justify-center items-center py-4 gap-3"
				>
					<label>이메일</label>
					<input type="text" className="border 1px" name="email" />
					<label>비밀 번호</label>
					<input type="text" className="border 1px" name="password" />
					<button
						type="submit"
						className="bg-buttonColor text-white mt-10 py-2 px-4 rounded-lg"
					>
						로그인
					</button>
					{JSON.stringify(userInfo)}
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
