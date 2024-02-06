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

## App description
This is a React demo for managing users. It includes features such as displaying a user list, adding new users, deleting users, and a Layout component to synchronize the components and render the view.

### Features

#### 1. User List Table

The ListTable component displays a list of users in a Material-UI table. Each row represents a user and contains information of the user, and actions for adding or deleting the user.

#### 2. Add User Form

The AddUserForm component allows to add new users to the list. It includes input fields to add user detail information. Form submission is managed using Redux, ensuring a centralized state management approach.

#### 3. Layout Component

The Layout component serves as the main wrapper for the components, providing a structured layout for the user management functionality.

#### Redux state management

Redux is added for state management of the user list, allowing for a centralized store and predictable state changes throughout the application.

- **`actions.ts`**: Contains action creators, which are functions that return action objects. These actions describe the adding user list, adding a new user, and deleting selected users events that occur in the application.
- **`reducers.ts`**: Contains reducer functions, which specify how the application's state changes in response to actions.
- **`store.ts`**: Creates the Redux store, which holds the application's state based on the global user interface.

## Contributing
Feel free to contribute to this project by opening issues or pull requests.






