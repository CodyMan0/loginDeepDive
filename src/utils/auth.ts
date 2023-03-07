import { Users } from "../constants/contant";
const _secret: string = "123412341234";

type LoginSuccessMessage = "SUCCESS";
type LoginFailMessage = "FAIL";

export interface LoginResponse {
	message: LoginSuccessMessage | LoginFailMessage;
	token: string;
}

export const login = async (
	email: string,
	password: string
): Promise<LoginResponse | void> => {
	const User = Users.find((user) => {
		return user.email === email && user.password === password;
	});
	return User
		? {
				message: "SUCCESS",
				token: JSON.stringify({ user: User.userInfo, secret: _secret }),
		  }
		: console.log("없는 정보입니다");
};
