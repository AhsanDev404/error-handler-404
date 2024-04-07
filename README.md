```markdown
# error-handler-dev

`error-handler-dev` is a TypeScript package for handling errors and asynchronous functions in an Express.js application.

## Installation

To install `error-handler-dev`, you can use npm or yarn:

```bash
npm install error-handler-dev
```

or

```bash
yarn add error-handler-dev
```

## Usage

### Error Handling Middleware

The error handling middleware provided by `error-handler-dev` catches errors and sends appropriate responses to the client.

```typescript
import express from 'express';
import errorMiddleware from 'error-handler-dev';

const app = express();

// Your Express routes and middleware

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Catch Async Function

The `catchAsync` function wraps asynchronous route handlers to catch any errors and pass them to the error handling middleware.

```typescript
import express from 'express';
import catchAsyncError from 'error-handler-dev';

const app = express();

// Async route handler
const asyncFunction = async (req, res, next) => {
  // Your asynchronous code here
};

// Route using catchAsync
app.get('/async', catchAsyncError(asyncFunction));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### How to Use

1. Install the package using npm or yarn as mentioned above.
2. Import the required middleware or functions into your Express application.
3. Add the error handling middleware to your Express app by using `app.use(errorMiddleware)`.
4. Use the `catchAsyncError` function to wrap your asynchronous route handlers to catch any errors.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## GitHub Repository

[View on GitHub](https://github.com/AhsanDev404/error-handler-dev)
```

