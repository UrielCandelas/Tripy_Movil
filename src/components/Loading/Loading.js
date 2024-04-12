import React from 'react'
import { ActivityIndicator, Modal, View, StyleSheet } from 'react-native'

function Loading({ isLoading: loading }) {
  return (
    <Modal animationType="fade" transparent={true} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size="large" color="#64CCC5" />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
})

export default Loading
