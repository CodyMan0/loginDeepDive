## COMMIT ์ปจ๋ฐด์

## ๐ ์ค์ค๋ก์ ๊ท์น

### git commit --prefix

```
[feat] ๊ธฐ๋ฅ ์ถ๊ฐ, ์ญ์ , ๋ณ๊ฒฝ - ์ฝ๋ ์์  ๋ฐ์ ์
[fix] ๋ฒ๊ทธ ์์  - ์ฝ๋ ์์  ๋ฐ์ ์
[design] CSS๋ฑ ์ฌ์ฉ์ UI ๋์์ธ ๋ณ๊ฒฝ - ์ฝ๋ ์์  ๋ฐ์ ์
[docs] ๋ฌธ์ ์ถ๊ฐ, ์ญ์ , ๋ณ๊ฒฝ - ์ฝ๋ ์์  ์์
[style] ์ฝ๋ ํ์, ์ ๋ ฌ, ์ฃผ์๋ฑ์ ๋ณ๊ฒฝ, ex) ์ธ๋ฏธ์ฝ๋ก  ์ถ๊ฐ - ์ฝ๋ ์์  ๋ฐ์ ์ (๋์์ ์ํฅ ์์)
[refactor] ์ฝ๋ ๋ฆฌํฉํ ๋ง ex) renaming a variable - ์ฝ๋ ์์  ๋ฐ์ ์
[chore] ํจํค์ง ๋งค๋์  ์ค์ , yarn ๋ชจ๋ ์ค์น ๋ฑ - ์ฝ๋ ์์  ์์
[etc] ์์ ํด๋นํ์ง ์๋ ๋ชจ๋  ๋ณ๊ฒฝ ex) ๋น๋ ์คํฌ๋ฆฝํธ ์์ , ํจํค์ง ๋ฐฐํฌ ์ค์  ๋ณ๊ฒฝ - ์ฝ๋ ์์  ์์
[rename] ํ์ผ ํน์ ํด๋๋ช์ ์์ ํ๊ฑฐ๋ ์ฎ๊ธฐ๋ ์์๋ง์ธ ๊ฒฝ์ฐ - ์ฝ๋ ์์  ์์
[remove] ํ์ผ์ ์ญ์ ํ๋ ์์๋ง ์ํํ ๊ฒฝ์ฐ - ์ฝ๋ ์์  ์์
[setting] ํด๋/์ค์  ์ถ๊ฐ,์ญ์  - ์ฝ๋ ์์  ์์
```

## ๋ฆฌํฉํ ๋ง

1. ์ธํ์ ์ํ๋ก ๊ด๋ฆฌํ์ฌ ๋ก๊ทธ์ธ ํผ ๊ตฌํํ๋ ๊ฒ์ ๊ธฐ๋ณธ์ ์ธ formData๋ฅผ ํ์ฉํ์ฌ ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง ์ต์ํ

```ts
// input์ onChange ๋ก์ง ์ญ์ 
const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = event;

		setUserInputs({
			...userInputs,
			[name]: value,
		});
	};

// form submit์ด ๋ ๋ formData.get ๋งค์๋๋ฅผ ํตํด ์์ด๋์ ๋น๋ฐ๋ฒํธ ํ์ธ
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

```
