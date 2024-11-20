# Backend Template Framework

This project is a robust backend template framework built with Node.js. It includes features such as configurable logging, security for all APIs, exception/error handling, health check APIs, API documentation, and configurable database management for various databases like Redis, MongoDB, and PostgreSQL. This template allows API developers to focus on writing API logic without worrying about cross-cutting concerns.

## Table of Contents

- [Features](#Features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)


## Features

- Configurable logging using Winston
- Security middleware using Helmet
- Exception and error handling
- Health check APIs
- API documentation using Swagger
- Configurable database management for MongoDB, PostgreSQL, and Redis

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/nodejs-backend-template.git
    ```
2. Navigate to the project directory:
    ```sh
    cd nodejs-backend-template
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To start the production server, run:
```sh
npm start
```

## Project Structure

```
backend-template/
├── config/
│   ├── dbConfig.js
│   ├── loggerConfig.js
│   └── securityConfig.js
├── controllers/
│   └── exampleController.js
├── middlewares/
│   ├── errorHandler.js
│   ├── logger.js
│   ├── security.js
│   └── healthCheck.js
├── models/
│   └── exampleModel.js
├── routes/
│   └── exampleRoutes.js
├── services/
│   └── exampleService.js
├── utils/
│   ├── logger.js
│   └── db.js
├── .env
├── app.js
├── package.json
└── README.md
```
- **config/**: Configuration files for database, logging, and security.
- **controllers/**: Controllers for handling API requests.
- **middlewares/**: Middleware for logging, error handling, security, and health checks.
- **models/**: Mongoose models for MongoDB.
- **routes/**: Route definitions for the API.
- **services/**: Service layer for business logic.
- **utils/**: Utility functions for logging and database connections.


## Scripts

- `npm run dev`: Starts the development server with hot reloading.
- `npm run build`: Builds the project for production.
- `npm start`: Starts the production server.

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.