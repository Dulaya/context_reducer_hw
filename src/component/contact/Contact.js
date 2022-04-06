import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {StateContext} from '../../context/Context';
import {styles} from './Contact.styles';

export const Contact = () => {
  const {state} = useContext(StateContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.contact.name}</Text>
      <Text style={styles.text}>{state.contact.city}</Text>
      <Text style={styles.text}>{state.contact.state}</Text>
      <Text style={styles.text}>{state.contact.email}</Text>
      <Text style={styles.text}>{state.contact.occupation}</Text>
    </View>
  );
};
