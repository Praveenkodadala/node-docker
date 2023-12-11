import express from 'express';

const app = express();
const port = 8080;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});