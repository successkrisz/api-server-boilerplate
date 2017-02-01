# A basic API server Boilerplate

### Installation

Recommended way for installation is using yarn, however it's working the same way using `npm install` as well

```
 git clone https://github.com/successkrisz/api-server-boilerplate
 cd api-server-boilerplate
 yarn install
```

### Commands:

| **`npm run <script>`** | **Description** |
|------------------------|-----------------|
|`start`|Serves your development server at `localhost:3004` in watch mode.|
|`build`|Transcompiles your code to es5 to the `/build` folder.|
|`serve`|Serves the previously built server in production mode from the `/build` folder.|
|`test`|Runs unit tests using Mocha.|
|`test:watch`|Runs unit tests using Mocha in watch mode.|
|`lint`|Lint all `.js` files.|
|`lint:watch`|Lint all `.js` files in watch mode.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
|`db`|Starts up a mongoDB server on `localhost:27017`|
### Using mongoose:

To use mongoose in the project set the `useDB` flag in config to `true` and the `DBHost` flag to point to your mongoDB database (defaults to localhost:27017)

