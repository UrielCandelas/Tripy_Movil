import { View, TextInput, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import React from 'react'
import { useState } from 'react'
import SearchFilter from './SearchFilter'

export default function SearchBar() {
    const words=[
        {
            name: "hola",
            id:"1"
        },
        {
            name: "hola",
            id:"2"
        },
        {
            name: "hola",
            id:"3"
        },
        {
            name: "hola",
            id:"4"
        },
        {
            name: "hola",
            id:"5"
        },
        {
            name: "hola",
            id:"6"
        }
    ]
  const [input, setInput] = useState("");
    return (
    <View style={{marginTop:-60, marginBottom: 40,margin: 15, width:'90%'}}>
      <View style={{
        padding:10, flexDirection: 'row',
        width: '95%',
        backgroundColor: '#d9dbda',
        borderRadius: 10,
        alignItems:'center'
      }
      }>
        <TextInput value={input} onChangeText={(text) => setInput(text)}
        style={{fontSize: 15}} placeholder='Buscar'/>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    
})