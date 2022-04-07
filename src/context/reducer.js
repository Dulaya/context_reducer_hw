import {balanceReducer} from './balance/balance.reducer';
import {billReducer} from './bill/bill.reducer';
import {investmentReducer} from './investment/investment.reducer';

export const reducer = (state, action) => {
  return {
    balance: balanceReducer(state.balance, action),
    bill: billReducer(state.bill, action),
    investment: investmentReducer(state.investment, action),
  };
};
