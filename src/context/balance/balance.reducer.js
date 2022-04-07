import {ACTIONS} from '../actionTypes';

export const balanceReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DEPOSIT_MONEY:
      return {...state, USD: state.USD + action.value};
    case ACTIONS.WITHDRAW_MONEY:
      return {...state, USD: state.USD - action.value};
    case ACTIONS.RESET_MONEY:
      return {...state, USD: 0};
    default:
      return state;
  }
};
