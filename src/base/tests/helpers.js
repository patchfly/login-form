import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../redux/configureStore';

export const fullMount = (children, options = {}) => {
  let store = options.store;

  if (!store) {
    store = configureStore();
  }

  return mount(
    <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>
  );
};
