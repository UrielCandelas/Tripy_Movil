import { ActivityIndicator,View } from 'react-native'
import { useAuth } from '../../context/AuthContext'
import {useNavigation} from '@react-navigation/native'
import React from 'react'

export default function Loading({ children }) {
    const navigation = useNavigation();
    const {loading, isAuthenticated } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={'#000000'} />
      </View>
    )
  }
  if (!loading && !isAuthenticated) {
    navigation.navigate('Inicio')
    return;
  }
  return children
}