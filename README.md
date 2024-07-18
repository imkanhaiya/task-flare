# Task Flare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Json Server

This project uses [Json Server](https://www.npmjs.com/package/json-server) as backend server.

## Prerequisites

Before running the project, ensure you have the following installed:

### Node.js

This project requires Node.js to run. Download and install Node.js from [https://nodejs.org/](https://nodejs.org/). Node.js 14.x or later is recommended. This project uses Node.js v20.11.0

You can check your Node.js installation by running:

```bash
node --version
```

### Angular CLI

After installing Node.js, install the Angular CLI globally using npm by running:

```bash
npm install -g @angular/cli
```

This will allow you to run Angular commands such as ng serve and ng build.

You can verify your Angular CLI installation by checking its version:

```bash
ng --version
```

## Installing NPM Packages

After cloning the project and ensuring all prerequisites are installed, navigate to the project directory in your terminal and run the following command to install the required npm packages:

```bash
npm install
```

## Running backend server

In a separate terminal, start json-server to watch the db.json file at the root of the project:

```bash
json-server db.json
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/cli) page.
