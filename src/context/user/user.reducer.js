import {ACTIONS} from '../actionTypes';

export const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ZERO:
      return {
        ...state,
        user: {
          ...state.user,
          name: 'Forrest Gump',
          image:
            'https://react-native-baby-yoda-profile-images.s3.us-west-2.amazonaws.com/intro-1554741430.jpg',
        },
      };
    case ACTIONS.ONE:
      return {
        ...state,
        user: {
          ...state.user,
          name: 'Lieutenant Dan',
          image:
            'https://react-native-baby-yoda-profile-images.s3.us-west-2.amazonaws.com/26229.jpg',
        },
      };
    case ACTIONS.TWO:
      return {
        ...state,
        user: {
          ...state.user,
          name: 'Jenny Curran',
          image:
            'https://react-native-baby-yoda-profile-images.s3.us-west-2.amazonaws.com/forest-43-e1589280103263.webp',
        },
      };
    case ACTIONS.THREE:
      return {
        ...state,
        user: {
          ...state.user,
          name: 'Bubba',
          image:
            'https://react-native-baby-yoda-profile-images.s3.us-west-2.amazonaws.com/0298220abbe0428897ff64b0a6ee260e_xl.jpg',
        },
      };
    default:
      return state;
  }
};
