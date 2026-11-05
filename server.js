
import http from 'node:http';

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.end('Welcome to TodoBackend API');
    }

    else if (req.method === 'GET' && req.url === '/todos') {
        res.end('Getting all todos');
    }

    else if (req.method === 'POST' && req.url === '/todos') {
        res.end('Creating a new todo');
    }

    else if (req.method === 'DELETE' && req.url === '/todos') {
        res.end('Deleting todos');
    }

    else {
        res.statusCode = 404;
        res.end('Route not found');
    }

});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
