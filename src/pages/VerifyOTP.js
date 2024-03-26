import { View, Text } from 'react-native'
import { React, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import GeneralText from '../components/GeneralComponents/GeneralText'
import GeneralInput from '../components/GeneralComponents/GeneralInput'
import GeneralButton from '../components/GeneralComponents/GeneralButton'

export default function VerifyOTP() {
  const { verifyOTPFunc, resendOTPFunc, isAuthenticated, provUser } = useAuth()

  const [OTP, setOTP] = useState('')

  const handleSubmit = async () => {
    console.log(OTP)
    try {
      const res = await verifyOTPFunc(OTP)
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
        text="Verificar OTP"
        color="black"
        fontWeight="bold"
        marginTop={50}
        marginBottom={20}
        size={20}
      />
      <GeneralInput onChangeText={setOTP} placeholder={'Ingresa OTP'} />
      <GeneralText
        text="Volver a enviar OTP"
        onPress={() => {
          resendOTPFunc(provUser?.email)
        }}
        color="black"
      />
      <GeneralButton text="Verificar" onPressHandler={handleSubmit} />
    </View>
  )
}
