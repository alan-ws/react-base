import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages';
import { setup } from 'goober';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './lib/state/store';

setup(React.createElement);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
