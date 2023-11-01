import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

// Reducers

const feeling = (state = 0, action) => {
    if (action.type === 'SUBMIT_FEELING') {
        return action.payload;
    }
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SUBMIT_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SUBMIT_SUPPORT') {
        return action.payload;
    }
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SUBMIT_COMMENTS') {
        return action.payload;
    }
    return state;
}

// Combine reducers

const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments

    }),
    applyMiddleware(logger)
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

export {store};