import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./Footer";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'
import reduxThunk from 'redux-thunk'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

// function loggerMiddleware(store) { // функция, которая при изменении store (в redux) будет выводить все в консоль.
//     return function (next) {
//         return function (action) {
//             const result = next(action);
//             console.log('Middleware', store.getState());
//             return result
//         }
//     }
// }

// Более упращенный вариант написанной выше функции:

const loggerMiddleware = store => next => action => {
    const result = next(action);
            console.log('Middleware', store.getState());
            return result
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    loggerMiddleware,
    reduxThunk
)));

const application = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
            <Footer/>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(application, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
