import { postLogin } from '../../services/AuthService';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import store from '../../store';
import { Provider } from 'react-redux';

jest.mock('../../services/AuthService.js');
const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
  }),
}));


describe('Login Component', () => {
  it('logs in a user', async() => {
    postLogin.mockResolvedValue(
      {
        id: '1',
        userName: 'steve77',
        userRole: 'teacher' 
      }
    );

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const userNameInput = screen.getByTestId('login-username');
    const passwordInput = screen.getByTestId('login-password');
    const button = screen.getByRole('button');

    userEvent.type(userNameInput, 'steve77');
    userEvent.type(passwordInput, 'password');
    userEvent.click(button);

    return waitFor(() => {
      expect(userNameInput.value).toEqual('');
      expect(passwordInput.value).toEqual('');
    });
  });
});
