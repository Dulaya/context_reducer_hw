import React, {useReducer} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StateContext} from './src/context/Context';
import {reducer} from './src/context/reducer';
import {user, balance, contact} from './src/context';
import {Balance, ButtonGroup, Profile, Contact} from './src/component';

export const App = () => {
  const initialState = {user, balance, contact};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView>
      <ScrollView>
        <StateContext.Provider value={{state, dispatch}}>
          <ButtonGroup />
          <Balance />
          <Profile />
          <Contact />
        </StateContext.Provider>
      </ScrollView>
    </SafeAreaView>
  );
};
