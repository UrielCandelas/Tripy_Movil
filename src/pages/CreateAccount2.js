import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import Toast from 'react-native-toast-message'
import React, { useState, useEffect } from 'react'
import GeneralButton2 from '../components/GeneralComponents/GeneralButton2'
import GeneralLittleTxt from '../components/GeneralComponents/GeneralLittleTxt'
import GeneralTxt from '../components/GeneralComponents/GeneralTxt'
import AnimatedInput from '../components/AnimatedInput'
import { useAuth } from '../context/AuthContext'
import { useRoute, useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading/Loading'
import { useTranslation } from 'react-i18next'

export default function CreateAccount2() {
  const { t } = useTranslation()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigation = useNavigation()
  const route = useRoute()
  const data = route.params
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('LandPage')
    }
  }, [isAuthenticated])

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss()
  }
  const handleSubmit = () => {
    if (
      userName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      userName === ' ' ||
      email === ' ' ||
      password === ' '
    ) {
      Toast.show({
        type: 'error',
        text1: t('ErrorM'),
        text2: t('EMessage'),
        visibilityTime: 3000,
        position: 'bottom',
        bottomOffset: 50,
      })
      return
    } else if (password != confirmPassword || password.length < 8) {
      Toast.show({
        type: 'error',
        text1: t('ErrorM'),
        text2: t('DiffPasswords'),
        visibilityTime: 3000,
        position: 'bottom',
        bottomOffset: 50,
      })
      return
    }

    const data2 = {
      name: data.name,
      lastName: data.lastName,
      secondLastName: data.secondLastName,
      userName,
      email,
      password,
      confirmPassword,
    }
    signup(data2)
    navigation.navigate('verifyOTP')
  }
  return (
    <View style={styles.centeredContainer}>
      <GeneralTxt Txt={t('CreateAccount')} style={{ width: 175 }} />
      <GeneralLittleTxt
        Txt={t('PersonalInfo')}
        marginTop={-150}
        marginBottom={20}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('User')}
          duration={300}
          width={'70%'}
          height={60}
          onChange={setUserName}
          value={userName}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('Email')}
          duration={300}
          keyboardType={'email-address'}
          width={'70%'}
          height={60}
          onChange={setEmail}
          value={email}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('Password')}
          duration={300}
          width={'70%'}
          height={60}
          secureTextEntry={true}
          onChange={setPassword}
          value={password}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('ConfirmPassword')}
          duration={300}
          width={'70%'}
          height={60}
          secureTextEntry={true}
          onChange={setConfirmPassword}
          value={confirmPassword}
        />
      </TouchableWithoutFeedback>
      <GeneralButton2
        Txt={t('Continue')}
        style={{
          fontSize: 40,
          backgroundColor: '#64CCC5',
          marginTop: 0,
          width: '60%',
          height: '25%',
        }}
        color="white"
        onPress={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
