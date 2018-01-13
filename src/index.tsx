
// get typescript to allow dev tools in window
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from 'react-redux' ;
import { combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import { aboutReducer } from './store/about/aboutReducer';
import { menuReducer } from './store/menu/menuReducer';
import { projectsReducer } from './store/projects/projectsReducer';
import { projectDetailsReducer } from './store/projectDetails/projectDetailsReducer';
import { App } from './App';

// fix for safari as it doesn't have devtools
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

// Create Store
const store = createStore(
  combineReducers(
    { 
      menu: menuReducer, 
      projects: projectsReducer,
      projectDetails: projectDetailsReducer,
      about: aboutReducer
    }
  ), 
  compose(
    applyMiddleware(thunk), 
    composeEnhancers
  )
);

// Pass state to the application
let AppConnect: any = withRouter(connect(state => state)(App));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <AppConnect/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
