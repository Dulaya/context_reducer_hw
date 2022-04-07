import {ACTIONS} from '../actionTypes';

export const billReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_INSURANCE_BILL:
      return {...state, insurance: state.insurance + action.value};
    case ACTIONS.UPDATE_ELECTRICITY_BILL:
      return {...state, electricity: state.electricity + action.value};
    case ACTIONS.UPDATE_PHONE_BILL:
      return {...state, phone: state.phone + action.value};
    case ACTIONS.PAY_INSURANCE_BILL:
      return {...state, insurance: state.insurance - action.value};
    case ACTIONS.PAY_ELECTRICITY_BILL:
      return {...state, electricity: state.electricity - action.value};
    case ACTIONS.PAY_PHONE_BILL:
      return {...state, phone: state.phone - action.value};
    default:
      return state;
  }
};
