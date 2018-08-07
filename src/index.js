import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/configureStore';

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

ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
