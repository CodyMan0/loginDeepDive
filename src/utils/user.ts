import { User, UserInfo, Users } from "../constants/contant";

const _secret: string = "123412341234";

export const getUserInfo = async (token: string): Promise<UserInfo | null> => {
	// TODO: login 함수에서 받은 token을 이용해 사용자 정보를 받아오세요.
	const parsedToken = JSON.parse(token);
	if (!parsedToken?.secret || parsedToken.secret !== _secret) return null;

	const loggedUser: User | undefined = Users.find((user) => {
		if (user.userInfo.name === parsedToken.user.name) return user;
	});

	return loggedUser ? loggedUser.userInfo : null;
};
