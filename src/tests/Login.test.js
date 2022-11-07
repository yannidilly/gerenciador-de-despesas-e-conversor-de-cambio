import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';

const emailInputTestId = 'email-input';
const passwordInputTestId = 'password-input';

describe('Realiza os testes na página de login', () => {
  test('Testa se existe o input para preencher o email e a senha', () => {
    renderWithRouterAndRedux(<Login />);
    const emailText = screen.queryByText('E-mail:');
    expect(emailText).toBeInTheDocument();
    const emailInput = screen.queryByTestId(emailInputTestId);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.queryByTestId(passwordInputTestId);
    expect(passwordInput).toBeInTheDocument();
  });
  test('Testa se o botão fica desabilitado quando o email é preenchido com informações incorretas', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.queryByTestId(emailInputTestId);
    const passwordInput = screen.queryByTestId(passwordInputTestId);
    userEvent.paste(emailInput, 'teste');
    userEvent.paste(passwordInput, '123456');
    const loginButton = screen.queryByRole('button', { name: 'Entrar' });
    expect(loginButton).toBeDisabled();
    userEvent.paste(emailInput, '@');
    expect(loginButton).toBeDisabled();
    userEvent.paste(emailInput, 'teste');
    expect(loginButton).toBeDisabled();
    userEvent.paste(emailInput, '.');
    expect(loginButton).toBeDisabled();
    userEvent.paste(emailInput, 'com');
    expect(loginButton).not.toBeDisabled();
  });
  test('Testa se o botão fica desabilitado quando a senha é preenchida com menos caracteres do que o mínimo necessário', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.queryByTestId(emailInputTestId);
    const passwordInput = screen.queryByTestId(passwordInputTestId);
    userEvent.paste(emailInput, 'teste@teste.com');
    userEvent.paste(passwordInput, '12345');
    const loginButton = screen.queryByRole('button', { name: 'Entrar' });
    expect(loginButton).toBeDisabled();
    userEvent.paste(passwordInput, '6');
    expect(loginButton).not.toBeDisabled();
  });
  test('Testa se o usuário é enviado para página /carteira ao clicar no botão de login após as informações estarem preenchidas', () => {

  });
});
