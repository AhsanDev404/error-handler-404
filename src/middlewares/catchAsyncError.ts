import { CatchAsyncErrorMiddlewareFunction } from '../utils/interfaces';
import { Request, Response, NextFunction } from 'express';

const catchAsyncError: CatchAsyncErrorMiddlewareFunction = (
  asyncFunction
) => (req, res, next) => {
  Promise.resolve(asyncFunction(req, res, next)).catch(next);
};

export default catchAsyncError;
