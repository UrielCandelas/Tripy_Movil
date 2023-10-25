import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import GeneralLittleTxt from './GeneralLittleTxt';

export default function Boxes({ Txt,onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.inner}>
          <Text style={styles.text}>{Txt}</Text>
        </View>
        </TouchableOpacity>
        <GeneralLittleTxt Txt="Destino"/>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.inner}>
          <Text style={styles.text}>{Txt}</Text>
        </View>
        </TouchableOpacity>
        <GeneralLittleTxt Txt="Destino"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    padding: 10,
  },
  inner: {
    flex: 1,
    backgroundColor: '#E7E8EA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 250, // Altura máxima por caja
  },
  text: {
    color: 'black',
  },
});
