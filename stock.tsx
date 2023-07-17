import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const data = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default () => (
  <FlatList
    data={data}
    numColumns={3}
    style={styles.container}
    renderItem={({ item: day }) => <Text style={styles.element}>{day}</Text>}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});