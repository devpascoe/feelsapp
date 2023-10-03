import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Row(props) {
  const {title, created, name} = props;
  return (
    <View style={styles.item}>
      <View style={styles.miniContainer}>
        <Text style={styles.mini}>{name ?? 'Anonymous'}</Text>
        <Text style={styles.mini}>
          {new Date(created).toLocaleDateString()}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 8,
    marginHorizontal: 8,
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mini: {
    fontSize: 12,
  },
  title: {
    fontSize: 32,
    marginTop: 4,
  },
});

export default Row;
