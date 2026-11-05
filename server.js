
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const server = http.createServer((req, res) => {

    console.log(req.method, req.url);

    if (req.method === 'GET' && req.url === '/') {

        const filePath = path.join(
            process.cwd(),
            'public',
            'index.html'
        );

        fs.readFile(filePath, (err, content) => {

            if (err) {
                console.log(err);
                res.statusCode = 500;
                return res.end('Could not load HTML');
            }

            res.setHeader('Content-Type', 'text/html');
            res.end(content);

        });

        return;
    }

    res.statusCode = 404;
    res.end('Route not found');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
