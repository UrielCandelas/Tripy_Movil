// App.js
import React, { useState } from 'react'
import { View, Button, Image, StyleSheet } from 'react-native'
import { CameraScreen } from './CameraScreen'
import GeneralButton2 from '../components/GeneralComponents/GeneralButton2'

export default function VerifyID() {
  const [imageUri, setImageUri] = useState(null)
  const [openCamera, setOpenCamera] = useState(false)

  const openCameraHandler = () => {
    setOpenCamera(true)
  }

  const handlePictureTaken = (uri) => {
    setImageUri(uri)
    setOpenCamera(false)
  }

  const handleCancel = () => {
    setOpenCamera(false)
  }

  return (
    <View style={styles.container}>
      {openCamera ? (
        <CameraScreen
          onPictureTaken={handlePictureTaken}
          onCancel={handleCancel}
        />
      ) : (
        <View style={styles.container}>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
          <GeneralButton2
            Txt={t('OpCamera')}
            style={{
              backgroundColor: '#64CCC5',
              marginTop: 50,
              width: '60%',
              height: '25%',
            }}
            color="white"
            onPress={openCameraHandler}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
})
