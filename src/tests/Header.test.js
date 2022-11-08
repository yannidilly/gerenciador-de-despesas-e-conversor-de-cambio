import { screen } from '@testing-library/react';
import { renderWithRedux } from './helpers/renderWith';
import Header from '../components/Header';

describe('Realiza os testes do componente Header', () => {
  test('Testa se existe um campo com o email cadastrado', () => {
    const initialState = {
      user: {
        email: 'teste@teste.com',
      },
    };
    renderWithRedux(<Header />, { initialState });
    const email = screen.queryByText('teste@teste.com');
    expect(email).toBeInTheDocument();
  });
  test('Testa se existe um campo com as despesas totais', () => {
    const initialState = {
      wallet: {
        totalSpending: 200,
      },
    };
    renderWithRedux(<Header />, { initialState });
    const expenseQuantity = screen.queryByTestId('total-field');
    expect(expenseQuantity).toBeInTheDocument();
    expect(expenseQuantity.textContent).toBe('200.00');
  });
});
