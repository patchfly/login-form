import React from 'react';
import { fullMount } from 'base/tests/helpers';
import LoginForm from './LoginForm';

const validData = {
  email: 'test@test.pl',
  password: 'Password1',
};

const invalidData = {
  email: 'test',
  password: 'pass',
};

const invalidPassData = {
  email: 'test@test.pl',
  password: 'pass',
};

const invalidEmailData = {
  email: 'test',
  password: 'Password1',
};

const fillData = (form, data) => {
  Object.keys(data).forEach((key) => {
    const field = form.find(`input[name="${key}"]`);
    if (field.length) {
      field.simulate('change', {target: {value: data[key]}});
      field.simulate('blur');
    }
  });
};

describe('<LoginForm />', () => {
  test('has .login-form class', () => {
    const wrapper = fullMount(
      <LoginForm />
    );
    expect(wrapper.find('.login-form')).toHaveLength(1);
  });

  test('has no errors on start', () => {
    const wrapper = fullMount(
      <LoginForm />
    );
    expect(wrapper.find('.form-error-text')).toHaveLength(0);
  });

  test('call no submitFcn when data is invalid', () => {
    const mockFn = jest.fn();
    const wrapper = fullMount(
      <LoginForm submitFcn={mockFn} />
    );
    const form = wrapper.find('.login-form');
    fillData(form, invalidData);
    form.simulate('submit');
    expect(mockFn.mock.calls).toHaveLength(0);
  });

  test('call no submitFcn when password is invalid', () => {
    const mockFn = jest.fn();
    const wrapper = fullMount(
      <LoginForm submitFcn={mockFn} />
    );
    const form = wrapper.find('.login-form');
    fillData(form, invalidPassData);
    form.simulate('submit');
    expect(mockFn.mock.calls).toHaveLength(0);
  });

  test('call no submitFcn when email is invalid', () => {
    const mockFn = jest.fn();
    const wrapper = fullMount(
      <LoginForm submitFcn={mockFn} />
    );
    const form = wrapper.find('.login-form');
    fillData(form, invalidEmailData);
    form.simulate('submit');
    expect(mockFn.mock.calls).toHaveLength(0);
  });

  test('call submitFcn when data is valid', () => {
    const mockFn = jest.fn();
    const wrapper = fullMount(
      <LoginForm submitFcn={mockFn} />
    );
    const form = wrapper.find('.login-form');
    fillData(form, validData);
    form.simulate('submit');
    expect(mockFn.mock.calls).toHaveLength(1);
  });
});
