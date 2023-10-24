import { View, ScrollView, Dimensions, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Rect } from 'react-native-svg'
import GeneralText from '../components/GeneralText'
import GeneralButton from '../components/GeneralButton'
import Arrowback from '../components/VerViajes/Arrowback'

export default function VerMiViaje({navigation}) {
  const windowWidth = Dimensions.get('window').width
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("PerfilUsuario")}>
      <View style={styles.header}>
        <Arrowback
          style={styles.arrow}
        />
      </View>
      </TouchableOpacity>
      

      <View >
        <Svg width={windowWidth} height="100">
          <Rect x="0" y="-100" width={windowWidth} height="1000" fill="#f2f2f2" />
        </Svg>
      </View>
      <GeneralText text="Destino" color="#1D1E20" fontWeight="bold" marginBottom={20} size={20}/>
      <GeneralText text="Se comparten los gastos de" color="#1D1E20" size={20}/>
      <GeneralText text="transporte, estancia" color="#176B87" size={20} />
      <Image source={require('../images/userIcon.png')} style={styles.image} />
      <GeneralText text="maximo de personas en el viaje" color="#1D1E20" size={20}/>
      <GeneralText text="#" color="#176B87" size={20}/>
      <GeneralText text="Gasto total Aproximado" color="#1D1E20" size={20}/>
      <GeneralText text="$" color="#176B87" size={20}/>
      <GeneralText text="Gastos totales hasta el momento" color="#1D1E20" size={20}/>
      <GeneralText text="$" color="#176B87" size={20}/>
      <GeneralText text="Requisitos Extra" color="#1D1E20" marginBottom={"65%"} size={20}/>
      <GeneralButton
        text="Eliminar viaje"
        colorText="#FEFEFE"
        colorBg="#64CCC5"
        padding={20}
        width={'100%'}
        onPressHandler={()=>navigation.goBack()}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 60,
    marginRight: 330,
  },
  image: {
    width: 12,
    height: 12,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  GeneralText: {
    marginTop: 20,
  },
})
