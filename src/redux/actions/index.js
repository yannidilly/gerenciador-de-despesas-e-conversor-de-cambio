import getCurrencies from '../../services/getCurrencies';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const receiveCurrencies = (curriencies) => ({
  type: GET_CURRENCIES,
  curriencies,
});

const fetchCurriencies = async () => {
  try {
    const curriencies = await getCurrencies();
    console.log(curriencies);
  } catch (error) {
    console.log(error);
  }
};

export const getCurrenciesAct = () => fetchCurriencies();
