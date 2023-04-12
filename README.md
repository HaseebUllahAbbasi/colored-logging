# colored-logging

## Install

Using NPM:

```
npm install pino
```

Using YARN:

```
yarn add pino
```

## Usage

```js
const Logger = require("./Logger");
const logger = new Logger("Project Name");
logger.info("Hi", { data: "data" });
```

### Usage

Methods

- info
- warn
- error
