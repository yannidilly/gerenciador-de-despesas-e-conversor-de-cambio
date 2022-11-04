import getCurrencies from '../../services/getCurrencies';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

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
    const currencies = await getCurrencies();
    dispatch(receiveCurrencies(currencies));
  } catch (error) {
    console.log(error);
  }
};
