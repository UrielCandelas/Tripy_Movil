import React from 'react'
import { View, StyleSheet } from 'react-native'

const Cuadritos = ({
  size,
  borderRadius,
  marginRight,
  marginBottom,
  marginTop,
}) => {
  return (
    <View
      style={[
        styles.grayBox,
        {
          width: size,
          height: size,
          borderRadius,
          marginRight,
          marginTop,
          marginBottom,
        },
      ]}
    ></View>
  )
}

const styles = StyleSheet.create({
  grayBox: {
    backgroundColor: 'gray',
  },
})

export default Cuadritos
