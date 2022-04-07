import {ACTIONS} from '../actionTypes';

export const balanceReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MONEY:
      return {...state, balance: {USD: state.balance.USD + action.value}};
    case ACTIONS.SUBTRACT_MONEY:
      return {...state, balance: {USD: state.balance.USD - action.value}};
    case ACTIONS.RESET_MONEY:
      return {...state, balance: {USD: 0}};
    default:
      return state;
  }
};
