import { ErrorMiddlewareErrorRequestHandler } from '../utils/interfaces';
import ErrorHandler from '../utils/ErrorHandler';
import { Request, Response, NextFunction } from 'express';

const errorMiddleware: ErrorMiddlewareErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  const errorResponse = {
    success: false,
    message: err.message || 'Internal Server Error',
  };

  if (err.code === 11000) {
    errorResponse.message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(400, errorResponse.message);
  } else {
    switch (err.name) {
      case 'CastError':
        errorResponse.message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(400, errorResponse.message);
        break;
      case 'JsonWebTokenError':
        errorResponse.message = 'Json web token is invalid';
        err = new ErrorHandler(400, errorResponse.message);
        break;
      case 'TokenExpiredError':
        errorResponse.message = 'Json web token is expired';
        err = new ErrorHandler(400, errorResponse.message);
        break;
      default:
        break;
    }
  }

  res.status(err.statusCode || 500).json(errorResponse);
};

export default errorMiddleware;
