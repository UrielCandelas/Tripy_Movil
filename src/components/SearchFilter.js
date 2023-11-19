import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'

export default function SearchFilter(data, input, setInput) {
  return (
    <View>
        <Text>SearchFilter</Text>
      <FlatList data={data} renderItem={({item}) =>{
        if(input === ""){
           return (
            <View>
            <Text>{item.name}</Text>
            </View>
           )
 
        }
      }}/>
    </View>
  )
}