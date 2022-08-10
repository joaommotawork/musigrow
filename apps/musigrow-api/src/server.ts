import http from 'http';
import app from '@src/app';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
	server.listen(PORT, () => {
		console.log(`Listening on Port: ${PORT}`);
	});
}

startServer();
