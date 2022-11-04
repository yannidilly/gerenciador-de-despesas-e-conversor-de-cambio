const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const formatCurrencies = (currenciesObj) => {
  const currenciesArray = Object.keys(currenciesObj);
  const indexUSDT = currenciesArray.indexOf('USDT');
  currenciesArray.splice(indexUSDT, 1);
  return currenciesArray;
};

const getCurrencies = async () => {
  const response = await fetch(endPoint);
  const currencies = await response.json();
  const currenciesFormated = formatCurrencies(currencies);
  return currenciesFormated;
};

export default getCurrencies;
