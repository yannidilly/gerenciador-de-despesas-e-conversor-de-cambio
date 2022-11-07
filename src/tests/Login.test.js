import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Login from '../pages/Login';

describe('Realiza os testes na página de login', () => {
  test('Testa se existe o input para preencher o email e a senha', () => {
    renderWithRouterAndRedux(<Login />);
    const emailText = screen.queryByText('E-mail:');
    expect(emailText).toBeInTheDocument();
    const emailInput = screen.queryByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.queryByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });
  test('Testa se o botão fica desabilitado quando o email é preenchido com informações incorretas', () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.queryByTestId('email-input');
    const passwordInput = screen.queryByTestId('password-input');
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

  });
  test('Testa se o usuário é enviado para página /carteira ao clicar no botão de login após as informações estarem preenchidas', () => {

  });
});
