import {userReducer} from './user/user.reducer';
import {balanceReducer} from './balance/balance.reducer';
import {contactReducer} from './contact/contact.reducer';

export const reducer = (state, action) => {
  switch (action.reducerName) {
    case 'user':
      return userReducer(state, action);
    case 'balance':
      return balanceReducer(state, action);
    case 'contact':
      return contactReducer(state, action);
    default:
      return state;
  }
};
