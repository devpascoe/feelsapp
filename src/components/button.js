import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

function Button(props) {
  const {text, onPress, outline} = props;
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.wrapperCustom,
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: outline ? '#ffffff' : '#CE3D20',
        },
      ]}>
      <Text style={[styles.text, {color: outline ? '#CE3D20' : '#ffffff'}]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  wrapperCustom: {
    borderColor: '#CE3D20',
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
  },
});

export default Button;
