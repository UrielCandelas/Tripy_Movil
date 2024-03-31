// CameraScreen.js
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'
import { MaterialIcons } from '@expo/vector-icons'

export const CameraScreen = ({ onPictureTaken, onCancel }) => {
  const [cameraRef, setCameraRef] = useState(null)

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync()
      onPictureTaken(photo.uri)
    }
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <MaterialIcons name="camera" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <MaterialIcons name="cancel" size={32} color="#FF5733" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  captureButton: {
    backgroundColor: '#333',
    borderRadius: 40,
    padding: 20,
    marginHorizontal: 20,
    margin: 10,
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
