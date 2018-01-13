import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter, withRouter } from 'react-router';
import { Provider } from 'react-redux' ;
import configureStore from 'redux-mock-store';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let state = {menu: {open: false}};
  const mockStore = configureStore();
  let store = mockStore(state);
  let menu = {open: false};

  let AppWrapped = withRouter(App);

  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <AppWrapped menu={menu} />
      </MemoryRouter>
    </Provider>
    , div);
});