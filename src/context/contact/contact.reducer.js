import {ACTIONS} from '../actionTypes';

export const contactReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ZERO:
      return {
        ...state,
        contact: {
          name: 'Forrest Gump',
          city: 'Greenbow',
          state: 'Alabama',
          email: 'Forrest.Gump@apple.com',
          occupation: 'Shrimp Boat Captain',
        },
      };
    case ACTIONS.ONE:
      return {
        ...state,
        contact: {
          name: 'Lieutenant Dan',
          city: 'New York City',
          state: 'New York',
          email: 'Lieutenant.Dan@apple.com',
          occupation: 'Lieutenant',
        },
      };
    default:
      return state;
  }
};
