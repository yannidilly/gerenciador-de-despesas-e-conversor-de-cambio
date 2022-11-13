import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';
import WalletForm from '../components/WalletForm';

describe('Realiza testes para o componente WalletForm', () => {
  test('Testa se todos os campos existem', () => {

  });
  test('Testa se todas as opções de moedas aparecem', () => {
    const initialState = {
      wallet: {
        currencies: Object.keys(mockData),
      },
    };
    renderWithRedux(<WalletForm />, { initialState });
    const currencies = screen.queryByTestId('currency-input');
    expect(currencies).toBeInTheDocument();
    for (let index = 0; index < currencies.children.length; index += 1) {
      expect(currencies.children[index].textContent).toBe(Object.keys(mockData)[index]);
    }
  });
  test('Testa se ao clicar no botão de Adicionar despesa, os inputs do formulário são limpos', async () => {
    const initialState = {
      wallet: {
        currencies: Object.keys(mockData),
        expenses: [],
      },
    };
    renderWithRedux(<WalletForm />, { initialState });
    const valueInput = screen.queryByTestId('value-input');
    const descriptionInput = screen.queryByTestId('description-input');
    const addExpenseButton = screen.queryByRole('button', { name: 'Adicionar despesa' });
    userEvent.type(valueInput, '100');
    userEvent.type(descriptionInput, 'Teste');
    userEvent.click(addExpenseButton);
    await waitFor(() => expect(descriptionInput.value).toBe(''));
  });
});
