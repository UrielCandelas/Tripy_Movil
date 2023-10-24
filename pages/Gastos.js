import React from 'react'
import { View, ScrollView, Dimensions, Image, StyleSheet } from 'react-native'
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
          onPresshandler={() => navigation.navigate('VerViajes2')}
        />
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Gastos del viaje"
          marginTop={60}
          marginLeft={80}
          marginRight={'28%'}
        />
      </View>
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Nombre del gasto"
        marginTop={50}
        marginBottom={20}
        marginLeft={20}
      />
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Nombre del gasto"
        marginTop={50}
        marginBottom={20}
        marginLeft={20}
      />
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Nombre del gasto"
        marginTop={50}
        marginBottom={20}
        marginLeft={20}
      />
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Nombre del gasto"
        marginTop={50}
        marginBottom={20}
        marginLeft={20}
      />
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Nombre del gasto"
        marginTop={50}
        marginBottom={20}
        marginLeft={20}
      />
      <GeneralText
        color="#1D1E20"
        size={17}
        height={18}
        text="Nombre del gasto"
        marginTop={50}
        marginBottom={20}
        marginLeft={20}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 60,
    marginLeft: 5,
  },
  GeneralText: {
    marginLeft: 20,
  },
})
