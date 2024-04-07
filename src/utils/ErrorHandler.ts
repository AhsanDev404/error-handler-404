export default class ErrorHandler {
    public statusCode: number;
  
    constructor(statusCode: number, message: string) {
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  