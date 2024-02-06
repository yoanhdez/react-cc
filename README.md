# React sample app with Webpack and Typescript
This app is a basic sample for creating a React web application using Webpack for bundling and Redux for state management.

The list of users provided as a data resource comes from DummyJSON, a dummy/fake JSON data to use as placeholder in development or in prototype testing.

Api rest endpoint: https://dummyjson.com/users

## Requirements
Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Git (for cloning the repository)

| Tech |  Version   |
| :--: | :--------: |
| node | `v20.10.0` |
| npm  | `v10.2.3`  |


## Setup
1.- Clone this repository to your local machine: `git clone https://github.com/yoanhh/react-cc.git`

2.- Navigate into the project directory: cd react-cc

3.- Install dependencies using npm: `npm install`

4.- Run the sample app: `npm start`  (navigate to http://localhost:9000 web server)

You should see your React application running with Webpack!

## Structure
The project structure is as follows:

react-cc/
  ├── src/                      # Source files
  │   ├── actions/              # Redux actions
  │   ├── components/           # React components
  │   ├── reducers/             # Redux reducers
  │   ├── store/                # Redux store configuration
  │   ├── global.ts             # Global types
  │   └── index.tsx             # Entry point
  ├── public/                   # Public assets
  ├── dist/                     # Production build (auto-generated)
  ├── index.html                # The main HTML file
  ├── webpack.config.js         # Webpack configuration
  ├── package.json              # NPM dependencies and scripts
  ├── README.md                 # Readme file
  └── tsconfig.json             # Typescript config definition

## Contributing
Feel free to contribute to this project by opening issues or pull requests.






