
// get typescript to allow dev tools in window
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider, connect } from 'react-redux' ;
import { combineReducers, createStore } from 'redux';
import { menuReducer } from './reducers/menu';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { projectsReducer } from './reducers/projects';
import { projectDetailsReducer } from './reducers/projectDetails';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

// Reducers
const reducer = combineReducers(
  { 
    menu: menuReducer, 
    projects: projectsReducer,
    router: routerReducer,
    projectDetails: projectDetailsReducer
  }
);

// fix for safari as it doesn't have devtools
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

// Create Store
const store = createStore(
  reducer, 
  compose(
    applyMiddleware(thunk), 
    applyMiddleware(historyMiddleware), 
    composeEnhancers
  )
);

// Pass state to the application
let AppConnect: any = connect(state => state)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppConnect/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
