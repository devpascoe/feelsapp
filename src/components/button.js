import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

function Button(props) {
  const {text, onPress, outline} = props;

  function styleForButton(pressed) {
    const customStyle = {
      opacity: pressed ? 0.5 : 1,
      backgroundColor: outline ? '#ffffff' : '#CE3D20',
    };
    return [styles.button, customStyle];
  }

  function styleForButtonText() {
    return [styles.text, {color: outline ? '#CE3D20' : '#ffffff'}];
  }

  return (
    <Pressable
      onPress={onPress}
      style={buttonProps => styleForButton(buttonProps.pressed)}>
      <Text style={styleForButtonText()}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: '#CE3D20',
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Button;
