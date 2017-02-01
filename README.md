# A basic API server Boilerplate

### Installation

Recommended way for installation is using yarn, however it's working the same way using `npm install` as well

```
 git clone https://github.com/successkrisz/api-server-boilerplate
 cd api-server-boilerplate
 yarn install
```

### Commands:

- npm start : starts the server in watch mode using nodemon
- npm run lint : lint code using ESLint
- npm run lint:watch : run linter in watch mode
- npm run lint:fix : let linter fix errors found
- npm run build : transcompile code to es5 in the /build folder
- npm run serve : runs the previously built server in production mode
- npm test: run all tests
- npm test:watch : run all tests in watch mode
- npm run db : start up a mongo server to connect to with mongoose from the application

### Using mongoose:

To use mongoose in the project set the `useDB` flag in config to `true` and the `DBHost` flag to point to your mongoDB database (defaults to localhost:27017)
