import 'dotenv/config';

const API_BASE_URL = process.env.API_BASE_URL;

type Method = 'GET';

async function send({ method, path }: { method: Method; path: string }) {
	const options = { method, headers: {} };

	return fetch(`${API_BASE_URL}${path}`, options)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path: string) {
	return send({ method: 'GET', path });
}
