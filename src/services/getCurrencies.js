const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const formatCurrencies = (currenciesObj) => {
  const currenciesArray = Object.keys(currenciesObj);
  const indexUSDT = currenciesArray.indexOf('USDT');
  currenciesArray.splice(indexUSDT, 1);
  return currenciesArray;
};

export const getFormatedCurrencies = async () => {
  const response = await fetch(endPoint);
  const currencies = await response.json();
  const currenciesFormated = formatCurrencies(currencies);
  return currenciesFormated;
};

export const getCurrencies = async () => {
  const response = await fetch(endPoint);
  const currencies = await response.json();
  return currencies;
};
