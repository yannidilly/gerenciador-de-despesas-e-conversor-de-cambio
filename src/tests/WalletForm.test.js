import { screen } from '@testing-library/react';
import { renderWithRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';
import WalletForm from '../components/WalletForm';

describe('Realiza testes para o componente WalletForm', () => {
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
});
