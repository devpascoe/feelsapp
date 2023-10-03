import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader;
