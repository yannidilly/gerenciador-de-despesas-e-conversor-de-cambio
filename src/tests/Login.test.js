import { screen } from '@testing-library/react';
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
  test('Testa se o botão fica desabilitado quando os inputs são preenchidos com informações incorretas', () => {
    // email no formato inválido
    // senha com menos de 6 caracteres
  });
  test('Testa se o usuário é enviado para página /carteira ao clicar no botão de login após as informações estarem preenchidas', () => {

  });
});
