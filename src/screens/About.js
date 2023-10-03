import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/button';

function About() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    if (name) {
      AsyncStorage.setItem('name', name);
    } else {
      AsyncStorage.getItem('name').then(value => {
        setName(value);
      });
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Current count {count}</Text>
          <View style={styles.buttonWrapper}>
            <Button text="Press me" onPress={() => setCount(count + 1)} />
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
  input: {
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    height: 32,
    fontSize: 18,
    backgroundColor: '#ffffff',
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});

export default About;
