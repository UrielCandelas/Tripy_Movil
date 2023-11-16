import { TouchableOpacity, StyleSheet, Image } from 'react-native'

import GeneralText from '../GeneralText'
import React from 'react'

export default function Viaje({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.view}>
      <GeneralText
        text={'Usuario'}
        color="#fff"
        fontWeight={'bold'}
        size={13}
        width_={268}
        paddingLeft={16}
        paddingRight={20}
        paddingTop={20}
      />
      <GeneralText
        text={'Gastos a compartir'}
        color="#fff"
        size={12}
        width_={268}
        paddingLeft={16}
        paddingRight={20}
        paddingTop={10}
      />
      <Image
        source={require('../../images/userIcon.png')}
        style={styles.image}
      />
      <GeneralText
        text={'Fecha del viaje'}
        color="#fff"
        size={12}
        width_={268}
        paddingLeft={16}
        paddingRight={20}
        paddingBottom={20}
        marginTop={-15}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#001C30',
    borderRadius: 10,
    height: 'auto',
    width: 334,
    flexShrink: 0,
    paddingLeft: 30,
    marginBottom: 20,
  },
  image: {
    width: 12,
    height: 12,
    marginLeft: 16,
    marginTop: 5,
    marginBottom: 20,
  },
})
