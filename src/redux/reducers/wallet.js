import { GET_CURRENCIES, ADD_EXPENSE, UPDATE_TOTAL_SPENDING } from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  totalSpending: 0,
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
  case UPDATE_TOTAL_SPENDING:
    return ({
      ...state,
      totalSpending: action.totalSpending,
    });
  default:
    return state;
  }
};

export default walletReducer;
