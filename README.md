# backend_project

## Environment Variables Setup with dotenv

This project uses [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables.

### Setup

1. Rename the `.env.example` file to `.env` in the project root:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your environment-specific values.

### Usage

- The project uses ES modules and imports dotenv in `src/index.js`:

  ```js
  import dotenv from "dotenv";

  dotenv.config({
    path: './.env'
  });
  ```

- When running the development server, dotenv is preloaded via the `dev` script in `package.json`:

  ```json
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  }
  ```

- To start the development server, run:

  ```bash
  npm run dev
  ```

### Notes

- The `.env` file is included in `.gitignore` to prevent committing sensitive information.
- This setup is compatible with Node.js version 22.17 and uses ES modules syntax.
