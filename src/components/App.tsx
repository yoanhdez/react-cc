import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Layout } from './layout/Layout';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>React sample app with Webpack and Typescript!</h1>
        </header>
        <main className="app-main">
          <Layout gutters={false} />
        </main>
        <footer className="app-footer">
          <p>Implemented by: Yoan Hernandez Hernandez ©2024</p>
        </footer>
      </div>
    </Provider>
  );
};
export default App;