import React, {useReducer} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StateContext} from './src/context/context';
import {reducer} from './src/context/reducer';
import {balance, bill, investment} from './src/context';
import {Balance} from './src/component';

export const App = () => {
  const initialState = {balance, bill, investment};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView>
      <ScrollView>
        <StateContext.Provider value={{state, dispatch}}>
          <Balance />
        </StateContext.Provider>
      </ScrollView>
    </SafeAreaView>
  );
};
