// CameraScreen.js
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

export const CameraScreen = ({ onPictureTaken, onCancel }) => {
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync()
      onPictureTaken(photo.uri)
    }
  }

  const changeFacing = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.otherButtonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <MaterialIcons name="cancel" size={32} color="#FF5733" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reverseButton} onPress={changeFacing}>
            <Ionicons name="camera-reverse" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.capButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <MaterialIcons name="camera" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
    width: '100%',
  },
  capButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  captureButton: {
    backgroundColor: '#333',
    borderRadius: 40,
    padding: 20,
    margin: 10,
    marginBottom: 30,
  },
  otherButtonContainer: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    marginTop: 'auto',
    marginLeft: 16,
  },
  reverseButton: {
    marginTop: 'auto',
    marginRight: 16,
  },
})
