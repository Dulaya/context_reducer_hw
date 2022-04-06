import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ACTIONS} from '../../context/actionTypes';
import {StateContext} from '../../context/Context';
import {styles} from '../buttongroup/ButtonGroup.styles';

export const ButtonGroup = () => {
  const {state, dispatch} = useContext(StateContext);

  const dispatchTypes = {
    addMoney: () =>
      dispatch({reducerName: 'balance', type: ACTIONS.ADD_MONEY, value: 1}),
    subtractMoney: () =>
      dispatch({
        reducerName: 'balance',
        type: ACTIONS.SUBTRACT_MONEY,
        value: 1,
      }),
    resetMoney: () =>
      dispatch({reducerName: 'balance', type: ACTIONS.RESET_MONEY}),
    getUser: () => {
      const pictureIndex = Math.floor(Math.random() * 4);
      let type;
      if (pictureIndex === 0) type = ACTIONS.ZERO;
      else if (pictureIndex === 1) type = ACTIONS.ONE;
      else if (pictureIndex === 2) type = ACTIONS.TWO;
      else if (pictureIndex === 3) type = ACTIONS.THREE;
      dispatch({
        reducerName: 'user',
        type,
        value: pictureIndex,
      });
    },
    updateContact: () => {
      let type;
      state.contact.name === 'Forrest Gump'
        ? (type = ACTIONS.ONE)
        : (type = ACTIONS.ZERO);
      dispatch({reducerName: 'contact', type});
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.buttonGreen]}
          onPress={() => {
            dispatchTypes.addMoney();
          }}>
          <Text style={styles.text}> Add $</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonRed]}
          onPress={() => {
            dispatchTypes.subtractMoney();
          }}>
          <Text style={styles.text}> Subtract $</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatchTypes.resetMoney();
          }}>
          <Text style={styles.text}> Reset $</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatchTypes.getUser();
        }}>
        <Text style={styles.text}>Get Random Character</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatchTypes.updateContact();
        }}>
        <Text style={styles.text}>Update Contact</Text>
      </TouchableOpacity>
    </View>
  );
};
