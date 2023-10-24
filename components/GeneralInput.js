import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function GeneralInput({ placeholder, flexDirection, justifyContent, style, onChangeText }) {
  return (
    <View style={styles.container} flexDirection={flexDirection} justifyContent={justifyContent}>
      <TextInput style={[styles.input, style]} placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor:'#E7E8EA',
    width:220,
  },
});
