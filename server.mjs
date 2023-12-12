import express from 'express';

const app = express();
const port = 8080;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, this is Express server!');
});


//not found error handler
app.use(function (req, res, next) {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  })

// Error handler 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
  
    res.status(statusCode).json({
      errorStatus:true,
      message: message,
    });
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});