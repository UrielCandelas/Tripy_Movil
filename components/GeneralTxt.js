import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GeneralTxt({ Txt, style }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{Txt}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:100,
      },
    text:{
     color:"black",
     textAlign:"center",
     marginTop:110,
     fontSize:28,
     fontWeight:'bold', 
     width:171,
    }
})
