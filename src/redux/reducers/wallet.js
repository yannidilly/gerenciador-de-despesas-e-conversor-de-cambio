import { GET_CURRENCIES, ADD_EXPENSE } from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
};

const walletReducer = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: action.expenses,
    });
  default:
    return state;
  }
};

export default walletReducer;
