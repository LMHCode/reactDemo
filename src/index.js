import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store, {persistor} from './store/index'
import {PersistGate} from 'redux-persist/lib/integration/react';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>     
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// window.addEventListener('beforeunload', () => {
//   // console.log('beforeupload')
//   sessionStorage.setItem('store', JSON.stringify(store))
// })
// console.log('upload')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
