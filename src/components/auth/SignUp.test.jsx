import { postSignUp } from '../../services/AuthService';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SignUp from './SignUp';
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

describe('Signup Component', () => {
  it('signs up a new user', async() => {
    postSignUp.mockResolvedValue(
      {
        id: '1',
        userName: 'steve77',
        userRole: 'teacher'
      }
    );
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const userNameInput = screen.getByTestId('signup-username');
    const passwordInput = screen.getByTestId('signup-password');
    const userRoleInput = screen.getByTestId('signup-userrole');
    const userButton = screen.getByRole('button');

    userEvent.type(userNameInput, 'steve77');
    userEvent.type(passwordInput, 'password'); 
    userEvent.type(userRoleInput, 'teacher');
    userEvent.click(userButton);

    return waitFor(() => {
      expect(userNameInput.value).toEqual('');
      expect(passwordInput.value).toEqual('');
      expect(userRoleInput.value).toEqual('student'); 
    });
  });
});
