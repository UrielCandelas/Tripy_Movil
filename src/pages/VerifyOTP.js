import { View, Text} from 'react-native'
import React from 'react'
import GeneralText from '../components/GeneralComponents/GeneralText'
import GeneralInput from '../components/GeneralComponents/GeneralInput'
import GeneralButton from '../components/GeneralComponents/GeneralButton'

export default function VerifyOTP() {
  return (
    <View>
      <GeneralText text = "Verify OTP" />
      <GeneralInput/>
      <GeneralButton/>
    </View>
  )
}