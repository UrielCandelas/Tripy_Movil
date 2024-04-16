// App.js
import React, { useState } from 'react'
import { View, Button, Image, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'
import { CameraScreen } from './CameraScreen'
import GeneralButton2 from '../components/GeneralComponents/GeneralButton2'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import GeneralText from '../components/GeneralComponents/GeneralText'

export default function App() {
  const [imageUri, setImageUri] = useState(null)
  const [openCamera, setOpenCamera] = useState(false)
  const { t } = useTranslation()
  const navigation = useNavigation()

  const onPressHandler = () => {
    navigation.navigate('Bienvenido')
  }

  return (
    <View style={styles.container}>
      <GeneralText
        text={
          'Tu identidad está siendo validada, se te mandará un correo cuando se haya completado el proceso'
        }
      />
      <GeneralButton2 Txt={'Inicio'} onPress={onPressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
