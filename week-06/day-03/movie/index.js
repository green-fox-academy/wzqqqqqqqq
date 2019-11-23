// eslint-disable-next-line no-undef
const http = require('http');
// eslint-disable-next-line no-undef
const url = require('url');
const HOST = 'localhost';
const port = 3000;

let movies =
	[
		{
			"id": 12,
			"title": "Forrest Gump",
			"genre": "drama"
		},
		{
			"id": 23,
			"name": "Mission Impossible 18",
			"genre": "action"
		}
	];

const server = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url, true);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');

	if (reqUrl.pathname === '/movies') {
		if (req.method === 'GET') {
			let response;
			if (reqUrl.query.id) {
				response = movies.find((movies) => movies.id === reqUrl.query.id);
			} else {
				response = movies;
			}
			res.end(JSON.stringify(response));
			return;
		}

		if (req.method === 'DELETE') {
			const movieId = parseInt(urlToken[2], 10);
			const urlToken = reqUrl.pathname.split('/');
			let response;

			if (urlToken.length > 2) {
				req.params = {movieId,};
				const {movieID} = req.params;
				const index = movies.findIndex((item) => {
					item.movie_id === movieID
				});

				if (index < 0) {
					res.statusCode = 400;
				} else {
					response = movies.splice(index, 1);
					res.statusCode = 200;
				}

				res.end(JSON.stringify(response));
			}
		}

		if (req.method === 'POST') {
			let bodyStr = '';

			if (req.headers.authorization !== 'top secret') {
				res.statusCode = 403;
				res.end('Fail to authorize.');
			} else {
				req.on('data', (chunk) => {
					bodyStr += chunk;
				}).on('end', () => {
					const requestBody = JSON.parse(bodyStr);

					if (!requestBody.title) {
						res.statusCode = 400;
						res.end('Please input title.');
					}

					if (movies.filter((m) => m.title === requestBody.title).length > 0) {
						res.statusCode = 409;
						res.end();
					}

					if (!requestBody.genre) {
						requestBody.genre = 'Unknown';
					}

					movies.push(requestBody);
					res.writeHead(201, {'Content-Type': 'application/json'});
					res.write(JSON.stringify({status: 'ok', date: Date.now()}));
				});
			}
		}
	}

	res.statusCode = 404;
	res.end('NOT FOUND');
});

server.listen(port, HOST, () => {
	console.log(`Server running at http://${HOST}:${port}/`);
});