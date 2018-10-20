import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {startSetEvents } from './actions/events';
import configureStore from './store/store';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
      }
}


store.dispatch(startSetEvents()).then(() => {
    console.log('start set event ran')
    renderApp();
});

registerServiceWorker();


