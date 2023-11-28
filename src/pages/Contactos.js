import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import GeneralText from '../components/GeneralComponents/GeneralText';
import Arrowback from '../components/VerViajes/Arrowback';
import Container from '../components/Contactos/Container';
import { useNavigation } from '@react-navigation/native';
import { useTravels } from '../context/TravelsContext';
import { useAuth } from '../context/AuthContext';


export default function Contactos() {
  const navigation = useNavigation();
  const { contacts,joinRoom } = useTravels();
  const { user } = useAuth();
  const handleSelect = async (id,name,userName)=>{
    const data = {
      id_user2: id,
      room: user.id > id ? `room-${user.userName}-${userName}`: `room-${userName}-${user.userName}`,
    }
    navigation.navigate('Chat',{
      id: id,
      name: name,
      room: data.room
    })
    await joinRoom(data)
  }
  return (
    <View style={{flex: 1, backgroundColor: '#FEFEFE'}}>
      <View style={styles.header}>
        <Arrowback
          style={styles.arrow}
          color={'transparent'}
          onPresshandler={() => navigation.goBack()}
        />
        <View>
        <GeneralText
        color='#FFFFFF'
        size={30}
        marginTop={30}
        text='Mensajeria Triipy'
        />
        <GeneralText
          color="white"
          size={17}
          height={18}
          text="Contactos"
          marginTop={0}
          marginLeft={0}
        />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {contacts?.map((contact,i)=>(
          <Container
          text={contact.name}
          onPresshandler={()=>handleSelect(contact.id,contact.name,contact.userName)}
          key={i}
          />
        ))}
        
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 120,
    backgroundColor: '#64CCC5',
    zIndex: 1000,
    position: 'absolute',
    top: 0,
  },
  arrow: {
    marginTop: 40,
    marginLeft: 10,
  },
  scrollContainer: {
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    paddingTop: 120, 
  },
  messagecontainer:{
    backgroundColor: 'transparent',
    borderTopWidth: 2, 
    borderTopColor: '#E8E8E8',
    display: 'flex',
    flexDirection: 'row',
  }
});
