import { View, Text } from 'react-native'
import { React, useState } from 'react'
import GeneralText from '../components/GeneralComponents/GeneralText'
import GeneralInput from '../components/GeneralComponents/GeneralInput'
import GeneralButton from '../components/GeneralComponents/GeneralButton'
import useAuth from '../context/AuthContext'

export default function VerifyOTP() {
  const { verifyOTPFunc } = useAuth

  const [OTP, setOTP] = useState('')

  const handleSubmit = async () => {
    console.log(OTP)
    try {
      const res = await verifyOTPFunc(OTP)
    } catch (error) {}
  }

  return (
    <View>
      <GeneralText text="Verificar OTP" />
      <GeneralInput onChangeText={setOTP} placeholder={'Ingresa OTP'} />
      <GeneralButton text="Verificar" onPressHandler={handleSubmit} />
    </View>
  )
}
