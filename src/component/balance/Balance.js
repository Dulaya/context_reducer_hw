import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {StateContext} from '../../context/Context';
import {styles} from './Balance.styles';

export const Balance = () => {
  const {state} = useContext(StateContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Balance: ${state.balance.USD.toFixed(2)}</Text>
    </View>
  );
};
