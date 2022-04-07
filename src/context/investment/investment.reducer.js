import {ACTIONS} from '../actionTypes';

export const investmentReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.BUY_STOCK:
      return {...state, stock: state.stock + action.value};
    case ACTIONS.BUY_BOND:
      return {...state, bond: state.bond + action.value};
    case ACTIONS.BUY_CRYPTO:
      return {...state, crypto: state.crypto + action.value};
    case ACTIONS.SELL_STOCK:
      return {...state, stock: state.stock - action.value};
    case ACTIONS.SELL_BOND:
      return {...state, bond: state.bond - action.value};
    case ACTIONS.SELL_CRYPTO:
      return {...state, crypto: state.crypto - action.value};
    default:
      return state;
  }
};
