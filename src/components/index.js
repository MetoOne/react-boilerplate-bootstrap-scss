// Note: Normalize must come before any components.
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App/App';
import configureStore from '../redux/configureStore';

const store = configureStore();

const rootComponent = (
  <div>
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </div>
);

ReactDOM.render(rootComponent, document.getElementById('appContainer'));
