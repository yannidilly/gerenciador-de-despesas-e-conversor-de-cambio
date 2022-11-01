const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const request = await fetch(endPoint);
  const response = await request.json();
  return response;
};

export default getCurrencies;
