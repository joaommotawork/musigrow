import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function signIn({ email, password }: any) {
	const res = await axios.post(`${strapiUrl}/api/auth/local`, {
		identifier: email,
		password,
	});
	return res.data;
}
