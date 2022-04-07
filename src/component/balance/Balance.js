import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {ACTIONS} from '../../context/actionTypes';
import {StateContext} from '../../context/context';
import {styles} from './Balance.styles';

export const Balance = () => {
  const {state, dispatch} = useContext(StateContext);

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>${state.balance.USD}</Text>
      </View>
      <Button
        title={'Add $'}
        onPress={() =>
          dispatch({
            type: ACTIONS.DEPOSIT_MONEY,
            value: 1,
          })
        }
      />
      <Button
        title={'Subtract $'}
        onPress={() =>
          dispatch({
            type: ACTIONS.WITHDRAW_MONEY,
            value: 1,
          })
        }
      />
      <Button
        title={'Reset $'}
        onPress={() =>
          dispatch({
            type: ACTIONS.RESET_MONEY,
          })
        }
      />
    </View>
  );
};
