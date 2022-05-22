import 'dotenv/config';

const API_BASE_URL = process.env.VITE_API_BASE_URL;

type Method = 'GET' | 'POST';

async function send({ method, path }: { method: Method; path: string }) {
	return fetch(`${API_BASE_URL}${path}`, {
		method,
		credentials: 'include'
	})
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

export function post(path: string) {
	return send({ method: 'POST', path });
}
