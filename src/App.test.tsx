import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux' ;
import configureStore from 'redux-mock-store';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let state = {menu: {open: false}};
  const mockStore = configureStore();
  let store = mockStore(state);
  let menu = {open: false};

  ReactDOM.render(
    <MemoryRouter>
      <Provider store={store}>
        <App menu={menu}/>
      </Provider>
    </MemoryRouter>
    , div);
});