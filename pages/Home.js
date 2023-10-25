import { View } from 'react-native'
import GeneralButton2 from '../components/GeneralButton2'
import GeneralTxt from '../components/GeneralTxt'

import GeneralLittleTxt from '../components/GeneralLittleTxt'



export default function Home({ navigation }) {
 
  return (
    <View>
      
      <GeneralTxt Txt="Bienvenido a Tripy"/>
      <GeneralButton2 Txt="Crear una cuenta" color="white" onPress={ () => { navigation.navigate('CreateAccount') }} />
      <GeneralLittleTxt Txt="¿Ya tienes una cuenta?" marginTop={20} marginBottom={20}/>
      <GeneralButton2 Txt="Iniciar sesión" style={{ backgroundColor: "#DAFFFB" }}  onPress={ () => { navigation.navigate('Inicio') }}/>
    </View>
  )
}
