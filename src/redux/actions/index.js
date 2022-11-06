import { getFormatedCurrencies } from '../../services/getCurrencies';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_TOTAL_SPENDING = 'UPDATE_TOTAL_SPENDING';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const receiveCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const getCurrenciesAct = (dispatch) => async () => {
  try {
    const currencies = await getFormatedCurrencies();
    dispatch(receiveCurrencies(currencies));
  } catch (error) {
    console.log(error);
  }
};

export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  expenses,
});

export const updateTotalSpending = (totalSpending) => ({
  type: UPDATE_TOTAL_SPENDING,
  totalSpending,
});
