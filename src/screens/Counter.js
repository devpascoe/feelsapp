import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Button from '../components/button';

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Current count {count}</Text>
          <View style={styles.buttonWrapper}>
            <Button text="Press me" onPress={incrementCount} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});

export default Counter;
