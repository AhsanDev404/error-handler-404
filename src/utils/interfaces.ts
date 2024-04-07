import { Request, Response, NextFunction } from 'express';

export interface ErrorMiddlewareErrorRequestHandler {
  (err: any, req: Request, res: Response, next: NextFunction): void;
}

export interface CatchAsyncErrorMiddlewareFunction {
  (asyncFunction: (req: Request, res: Response, next: NextFunction) => Promise<any>): (req: Request, res: Response, next: NextFunction) => void;
}

export interface ErrorHandler {
  statusCode: number;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
}
