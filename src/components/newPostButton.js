import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './button';

function NewPostButton(props) {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>How are you feeling?</Text>
        <Button text="I'm ..." onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#bbbbbb',
  },
  wrapper: {
    width: '50%',
  },
  title: {
    fontSize: 12,
    marginBottom: 6,
  },
});

export default NewPostButton;
