import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import GeneralText from '../components/GeneralText'
import Viaje from '../components/VerViajes/Viaje'
import Arrowback from '../components/VerViajes/Arrowback'

export default function VerViajes1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Arrowback
          style={styles.arrow}
          onPresshandler={() => navigation.goBack()}
        />
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Usuario"
          marginTop={60}
          marginLeft={80}
          marginRight={'28%'}
        />
      </View>
      <Svg height="200" width="200">
        <Circle cx="100" cy="100" r="70" fill="#F2F2F2" />
      </Svg>
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Ver Viajes"
        marginTop={50}
        marginBottom={20}
      />
      <Viaje />
      <Viaje />
      <Viaje />
      <Viaje />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 60,
    marginLeft: -12,
  },
})
