import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function GeneralButton({ Txt, style, color, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, {color}]}>{Txt}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
  },
  button: {
    backgroundColor: "#176B87", 
    padding: 10, 
    width: 335,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
  },
  buttonText: {
    color: 'white', 
  },
});
