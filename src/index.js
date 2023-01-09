import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import Meta from './Meta';
import App from './App';
import GlobalStyles from './GlobalStyles';
import './assets/scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Meta/>
        <GlobalStyles/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);