// middlewares/errorHandler.js

const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack); // log the full error in the terminal
  
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  
    res.status(statusCode).json({
      success: false,
      message: err.message || 'Something went wrong',
    });
  };
  
  export default errorHandlerMiddleware;
  