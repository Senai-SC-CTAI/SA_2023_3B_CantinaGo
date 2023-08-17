import * as React from 'react';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export function User() {
  return (
     <View style={styles.container}>

      <View style={styles.header}>
        <Feather 
        name="arrow-left" 
        size={38} 
        color="#FA321A" 
        style={{ marginLeft: 20 }} 
        />
        </View>

      <View style={styles.profileContent}>
        <View style={styles.profilePicture}>
          <Image 
          source={require('../../../assets/img/User.svg')} 
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
          />

          <MaterialCommunityIcons 
          name="pencil-minus-outline" 
          size={24} 
          color="#FFFFFF" 
          style={{ position: 'absolute', padding: 4, backgroundColor: '#6A6A6A', borderRadius: 20, marginLeft: '55%', marginTop: 7 }} 
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nome do Usuário</Text>
          <Text style={{ fontSize: 14, color: '#9E9D9D' }}>Tipo de usuário</Text>
        </View>
      </View>
      <View style={styles.inputsInfo}>
        <View style={styles.viewInput}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#6A6A6A" style={{ marginLeft: 10, fontWeight: 'bold' }} />
          <TextInput style={styles.inputs} placeholder="  seuemail@estudante.sesisenai.org.br" placeholderTextColor={"#6A6A6A"}  >
            </TextInput> 
          </View>
        <View style={styles.viewInput}>
          <MaterialIcons name="calendar-today" size={24} color="#6A6A6A" style={{ marginLeft: 10, fontWeight: 'bold' }} />
          <TextInput style={styles.inputs} placeholder="  data de nascimento" placeholderTextColor={"#6A6A6A"}  >
            </TextInput> 
            <MaterialCommunityIcons name="pencil-minus-outline" size={24} color="#6A6A6A" style={{ marginRight: 10, fontWeight: 'bold' }} />
            </View>
        <View style={styles.viewInput}><MaterialCommunityIcons name="school-outline" size={24} color="#6A6A6A" style={{ marginLeft: 10, fontWeight: 'bold' }} />
        <TextInput style={styles.inputs} placeholder="  turma" placeholderTextColor={"#6A6A6A"}  >
          </TextInput>
          <MaterialCommunityIcons name="pencil-minus-outline" size={24} color="#6A6A6A" style={{ marginRight: 10, fontWeight: 'bold' }} />
          </View>
        <View style={styles.viewInput}>
          <Feather name="smartphone" size={24} color="#6A6A6A" style={{ marginLeft: 10, fontWeight: 'bold' }} /><TextInput style={styles.inputs} placeholder="  telefone" placeholderTextColor={"#6A6A6A"}  >
            </TextInput>
            <MaterialCommunityIcons name="pencil-minus-outline" size={24} color="#6A6A6A" style={{ marginRight: 10, fontWeight: 'bold' }} />
            </View>
      </View>
      <View style={styles.feedback}>
        <Text style={{ color: "#9E9D9D", fontSize: 14 }}>Algum comentário?</Text>
        <Text style={{ fontSize: 14, textDecorationLine: 'underline', color: '#FA321A' }}>Deixe-o aqui</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={(Logout)}>
      <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'

  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    position: 'absolute',
    top: 0,
    alignItems: 'center'
  },
  profileInfo: {
    marginBottom: 70
  },
  viewInput: {
    width: 290,
    height: 37,
    backgroundColor: "#F4F4F4",
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileContent: {
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  inputsInfo: {

  },
  inputs: {
    width: '100%'
  },
  feedback: {
    display: 'flex',
    textAlign: 'center'
  },
  profilePicture: {
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#FA321A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}) 