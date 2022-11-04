import { GET_CURRENCIES } from '../actions';

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
  default:
    return state;
  }
};

export default walletReducer;
