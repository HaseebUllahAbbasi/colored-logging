# Logger

A simple logger utility for logging messages with different log levels.

## Installation

To install the `Logger` package, run the following command:

```shell
npm install logger
```

## Usage

Here is an example of how to use the Logger class:

```javaScript
const Logger = require('logger');

// Create a new instance of the Logger
const logger = new Logger('MyProject');

// Log an informational message
logger.info('This is an informational message.');

// Log a warning message
logger.warn('This is a warning message.');

// Log an error message
logger.error('This is an error message.');

// Log a message with additional data
const data = { key: 'value' };
logger.info('This is a message with additional data:', data);
```

## API

### Logger

The Logger class provides logging functionality with different log levels.

#### Constructor

new Logger(projectName: string): Creates a new instance of the Logger class with the specified projectName.

#### Methods

- info(message: string, data?: any): void: Logs an informational message with an optional data object.
- warn(message: string, data?: any): void: Logs a warning message with an optional data object.
- error(message: string, data?: any): void: Logs an error message with an optional data object.

## Installation

You can install the Logger package via npm:

```shell
npm install logger
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the ISC License.

## Issues

If you encounter any issues or have any questions, please create an issue on the GitHub repository.

## Versioning

This project follows the principles of Semantic Versioning.
