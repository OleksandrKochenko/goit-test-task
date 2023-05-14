import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from 'redux/store';
import 'normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter BrowserRouter basename="/goit-test-task">
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
