// App.js
import React, { useState } from 'react'
import { View, Button, Image, StyleSheet, Alert } from 'react-native'
import { CameraScreen } from './CameraScreen'
import GeneralButton2 from '../components/GeneralComponents/GeneralButton2'

export default function App() {
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
          <GeneralButton2
            style={styles.opCamera}
            Txt="Abrir Cámara"
            onPress={openCameraHandler}
            color="white"
          />
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  opCamera: {
    marginTop: '20%',
    marginBottom: 'auto',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
})
