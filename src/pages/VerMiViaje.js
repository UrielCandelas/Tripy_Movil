import { View, ScrollView, Dimensions, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Rect } from 'react-native-svg'
import GeneralText from '../components/GeneralComponents/GeneralText'
import GeneralButton from '../components/GeneralComponents/GeneralButton'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

export default function VerMiViaje() {
  const windowWidth = Dimensions.get('window').width
  const navigation = useNavigation();
  const route = useRoute();
  const {
    location,
    companions, 
    expenses,
    expenses_name,
    extras,
    isActive,
  } = route.params;
  const {t, i18n} = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=>navigation.goBack()}
        />
      </View>
      <GeneralText text={location} color="#1D1E20" fontWeight="bold" marginBottom={20} size={20}/>
      <GeneralText text={t("ShareSpent")} color="#1D1E20" size={20}/>
      <GeneralText text={expenses_name} color="#176B87" size={20} marginBottom={-25} marginTop={5}/>
      <GeneralText text={t("MaxPerson")} color="#1D1E20" size={20}/>
      <GeneralText text={`#${companions}`} color="#176B87" size={20}/>
      <GeneralText text={t("TotalCost2")} color="#1D1E20" size={20}/>
      <GeneralText text={`$${expenses}`} color="#176B87" size={20}/>
      <GeneralText text={t("Total")} color="#1D1E20" size={20}/>
      <GeneralText text={`$${expenses}`} color="#176B87" size={20}/>
      <GeneralText text={t("XRequests")} color="#1D1E20" marginBottom={5}  size={20}/>
      <GeneralText text={extras} color="#1D1E20" marginBottom={"61%"} size={20}/>
      <View style={styles.buttonContainer}>
      {isActive?
      <GeneralButton
      text={t("Delete")}
      colorText="#FEFEFE"
      colorBg="#64CCC5"
      padding={20}
      width={'100%'}
      onPressHandler={()=>navigation.goBack()}
    />: null}
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 60,
    marginRight: 330,
  },
  image: {
    width: 12,
    height: 12,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  GeneralText: {
    marginTop: 20,
  },back: {
    top: 0,
    left: -150,
    padding: 16,
    paddingTop: "15%",
    marginTop: 20,
    zIndex: 1
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 0,
},
})

/*
return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <Ionicons
          style={styles.back}
          name="arrow-back"
          size={24}
          color="black"
          onPress={()=>navigation.goBack()}
        />
      </View>

      <View >
        <Svg width={windowWidth} height="100">
          <Rect x="0" y="-100" width={windowWidth} height="1000" fill="#f2f2f2" />
        </Svg>
      </View>
      <GeneralText text={location} color="#1D1E20" fontWeight="bold" marginBottom={20} size={20}/>
      <GeneralText text={t("ShareSpent")} color="#1D1E20" size={20}/>
      <GeneralText text={expenses_name} color="#176B87" size={20} marginBottom={-25} marginTop={5}/>
      <Image source={require('../images/userIcon.png')} style={styles.image} />
      <GeneralText text={t("MaxPerson")} color="#1D1E20" size={20}/>
      <GeneralText text={`#${companions}`} color="#176B87" size={20}/>
      <GeneralText text={t("TotalCost2")} color="#1D1E20" size={20}/>
      <GeneralText text={`$${expenses}`} color="#176B87" size={20}/>
      <GeneralText text={t("Total")} color="#1D1E20" size={20}/>
      <GeneralText text={`$${expenses}`} color="#176B87" size={20}/>
      <GeneralText text={t("XRequests")} color="#1D1E20" marginBottom={5}  size={20}/>
      <GeneralText text={extras} color="#1D1E20" marginBottom={"61%"} size={20}/>
      {isActive?
      <View style={styles.buttonContainer}>
      <GeneralButton
      text={t("Delete")}
      colorText="#FEFEFE"
      colorBg="#64CCC5"
      padding={20}
      width={'100%'}
      onPressHandler={()=>navigation.navigate("LoadingScreen3")}
    />: null}
    </View>
    </ScrollView>
  )
*/