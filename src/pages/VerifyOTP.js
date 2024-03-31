import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { React, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import GeneralText from '../components/GeneralComponents/GeneralText'
import GeneralButton2 from '../components/GeneralComponents/GeneralButton2'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { useTranslation } from 'react-i18next'
import AnimatedInput from '../components/AnimatedInput'

export default function VerifyOTP() {
  const { verifyOTPFunc, resendOTPFunc, isAuthenticated, provUser } = useAuth()

  const { t } = useTranslation()

  const [otp, setOTP] = useState('')

  const navigation = useNavigation()

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss()
  }

  const handleSubmit = async () => {
    if (otp == '' || otp == ' ') {
      Toast.show({
        type: 'error',
        text1: t('ErrorM'),
        text2: t('EMessage'),
        visibilityTime: 3000,
        position: 'bottom',
        bottomOffset: 50,
      })
      return
    }
    try {
      const res = await verifyOTPFunc(otp)
      if (res.status == 200) {
        Toast.show({
          type: 'error',
          text1: t('ErrorM'),
          text2: t('OTPMessage'),
          visibilityTime: 3000,
          position: 'bottom',
          bottomOffset: 50,
        })
      } else {
        navigation.navigate('verifyID')
      }
    } catch (error) {}
  }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // navigate('/main')
  //   }
  // }, [isAuthenticated])

  return (
    <View>
      <GeneralText
        text={t('VerOTP')}
        color="black"
        fontWeight="bold"
        marginTop={50}
        marginBottom={20}
        size={20}
      />
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <AnimatedInput
          label={t('TypeOTP')}
          duration={300}
          width={'70%'}
          height={60}
          onChange={setOTP}
          value={otp}
        />
      </TouchableWithoutFeedback>
      <GeneralText
        text={t('ReOTP')}
        onPress={() => {
          resendOTPFunc(provUser?.email)
        }}
        color="black"
      />
      <GeneralButton2
        Txt={t('BtnVerOTP')}
        style={{
          backgroundColor: '#64CCC5',
          marginTop: 50,
          width: '60%',
          height: '25%',
        }}
        color="white"
        onPress={handleSubmit}
      />
    </View>
  )
}
