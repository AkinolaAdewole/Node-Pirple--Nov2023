const http = require('http');
const url = require('url');
const fs = require('fs');
const todoModel = require('../model/todoModel');

let data = [{ item: 'draw' }, { item: 'code' }];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    
    // GET: Fetch all todos
    if (req.url === '/todo' && method === 'GET') {
        todoModel.find({}, (err, todos) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Error fetching todos' }));
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todos));
        });
    }

    // POST: Add a new todo
    else if (req.url === '/todo' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { item } = JSON.parse(body);
            if (!item) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Item is required' }));
            }

            todoModel.create({ item }, (err, newTodo) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'Error saving todo' }));
                }
                data.push({ item });

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Todo added', todo: newTodo }));
            });
        });
    }

    // DELETE: Remove a todo by ID
    else if (parsedUrl.pathname.startsWith('/todo/') && method === 'DELETE') {
        const id = parsedUrl.pathname.split('/')[2]; // Extract ID from URL

        todoModel.findByIdAndDelete(id, (err, deletedTodo) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Error deleting todo' }));
            }
            if (!deletedTodo) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: 'Todo not found' }));
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Todo deleted', todo: deletedTodo }));
        });
    }

    // Default 404
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
