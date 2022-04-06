import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {StateContext} from '../../context/Context';
import {styles} from './Profile.styles';

export const Profile = () => {
  const {state} = useContext(StateContext);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: state.user.image}} />
      <Text style={styles.text}>{state.user.name}</Text>
    </View>
  );
};
