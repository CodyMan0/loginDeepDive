export interface UserInfo {
	name: string;
}

export interface User {
	email: string;
	password: string;
	userInfo: UserInfo;
}

export const Users: User[] = [
	{
		email: "juyoung",
		password: "1234",
		userInfo: { name: `hi juyoung` },
	},
];
