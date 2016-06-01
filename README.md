# Jest with Jasmine Reporters Example

> This is an example project built to demonstrate how to implement Jasmine Reporters with Jest.

## Usage

Run `npm install` after cloning this repository to download all the required packages for the project.

Run `npm start` to start the server locally:
```
npm start
```

The start script has a corresponding `prestart` script which will test and compile the code for you before starting the server. for full details, you can view the configuration in `package.json`.

## Jest Config

One of the powerful feature of Jest is that it automatically mocks dependencies as default. However, this means that we need to make sure we unmock the required modules in order to be able to export test results succesfully using jasmine reporters. 
With this in mind, below is the Jest config required in `package.json`:

```json

"jest": {
            "collectCoverage": true,
            "setupTestFrameworkScriptFile": "./setup-jasmine-env.js",
            "unmockedModulePathPatterns": [
               "./node_modules/react",
               "./node_modules/react-addons-test-utils",
               "./node_modules/jasmine-reporters"
             ]
         }
    
```

## Project Structure

Overview

```
.
├── /__tests__/              # Folder containing tests
│
├── /client/                 # The source code of the application
│   ├── /components/         # React components
│   ├── /compiled.js         # Compiled react components generated using Browserify
│   ├── /index.html          # root HTML file for inject
│   └── /main.js             # Root react file used for compile
│
├── .babelrc                 # Contains Babel configuration
├── .gitignore               # Defines which files should not be backed up to git
├── package.json             # Contains the list of 3rd party libraries and utilities used, as well as all npm scripts to run the project
├── server.js                # Node server config file
└── setup-jasmine-env.js     # Jasmine Reporters config file
```

