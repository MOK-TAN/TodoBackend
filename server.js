
import http from 'node:http';

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to TodoBackend API');
    }

    else if (req.url === '/about') {
        res.end('This is a Todo API built with Node.js');
    }

    else if (req.url === '/todos') {
        res.end('Here are your todos');
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
