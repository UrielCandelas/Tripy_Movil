import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native'

const Cuadritos = ({
  size,
  borderRadius,
  marginRight,
  marginBottom,
  marginTop,
  uri2,
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
    >
      <Image
        source={{ uri: uri2 }}
        style={{ width: '100%', height: '100%', borderRadius }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  grayBox: {
    backgroundColor: 'gray',
  },
})

export default Cuadritos