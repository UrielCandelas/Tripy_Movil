import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import GeneralText from '../components/GeneralText'
import Viaje from '../components/Destino/Viaje'
import Arrowback from '../components/VerViajes/Arrowback'
import Cuadritos from '../components/Destino/Cuadritos'

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
          text="Destino"
          marginTop={60}
          marginLeft={80}
          marginRight={'28%'}
        />
      </View>
      <View style={styles.row}>
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
        <Cuadritos
          size={70}
          borderRadius={10}
          marginRight={20}
          marginTop={20}
        />
      </View>
      <View style={styles.desc}>
        <GeneralText
          color="#1D1E20"
          size={17}
          height={18}
          text="Descripción"
          marginTop={50}
        />

        <GeneralText
          color="#1D1E20"
          size={15}
          height={18}
          text="Descripción del lugar"
          marginTop={10}
          marginBottom={20}
        />
      </View>

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
    marginLeft: -50,
  },
  row: {
    flexDirection: 'row',
  },
  desc: {
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
})
