import React, { useEffect } from 'react';
import styles from './styles';
import { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import axios from 'axios';

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Feedback } from '../Feedback';

export function User() {

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

const [usuario, setUsuario] = useState([]);

useEffect(() => {
  fetchUsuario()
}, [])

const fetchUsuario = async () => {
  try {
    const response = await axios.get('http://localhost:8090/usuario')
    setUsuario(response.data);
  } catch (error) {
    console.log('erro', error)
  }
};

const handleDelete = async(id_usuario: any, senha: any) => {
  try {
    console.log(id_usuario);
    console.log(senha);
    
    await axios.delete(`http://localhost:8090/usuario/${id_usuario}`);
    fetchUsuario();
  
    
  } catch (error) {
    console.error('Erro ao excluir usuario:', error);
  }
};


// navegação 
  interface NavigationType {
    goBack: any;
    navigate: (routeName: string) => void;
  }

  const navigation: NavigationType = useNavigation();

  function back() {
    navigation.goBack();
  }

  function Logout() {
    navigation.navigate('SignIn')
  }

  const [showUser, setShowUser] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <View style={styles.container}>
      {showUser && (
        <View style={styles.user}>

          <View style={styles.header}>
            <TouchableOpacity onPress={back}>
              <Feather
                name="arrow-left"
                size={38}
                color="#FA321A"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Usuário</Text>
          </View>

          <View style={styles.profileContent}>
            <View style={styles.profilePicture}>
              <Image
                source={require('../../../assets/img/User.png')}
                style={styles.image}
              />
              <Image
                source={require("../../../assets/Icons/Editar.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",

                  position: 'absolute',
                  right: 30,
                  top: 30,
                  justifyContent: 'center',
                  alignItems: 'center'

                }}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold" }}>Nome do Usuário</Text>
              <Text style={{ fontSize: 14, color: '#9E9D9D', fontFamily: "Inter_400Regular", textAlign: 'center' }}>Tipo de usuário</Text>
            </View>
          </View>
          <View style={styles.inputsInfo}>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Email.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              />
              <TextInput style={styles.inputs} placeholder="  seuemail@estudante.sesisenai.org.br" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Data.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              /> 
              <TextInput style={styles.inputs} placeholder="  data de nascimento" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>

              {/* <Image
                source={require("../../../assets/Icons/EditarCinza.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  marginLeft: -30,
                  marginRight: 10,
                }}
              /> */}

            </View>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Turma.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              /> 
              <TextInput style={styles.inputs} placeholder="  turma" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>
              {/* <Image
                source={require("../../../assets/Icons/EditarCinza.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  marginLeft: -30,
                  marginRight: 10,
                }}
              /> */}
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Telefone.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              />
              <TextInput style={styles.inputs} placeholder="  telefone" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>
              {/* <Image
                source={require("../../../assets/Icons/EditarCinza.png")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  marginLeft: -30,
                  marginRight: 10,

                }}
              /> */}
            </View>
          </View>
          <View style={styles.feedbackText}>
            <Text style={{ color: "#9E9D9D", fontSize: 14, fontFamily: 'Inter_400Regular' }}>Algum comentário?</Text>
            <TouchableOpacity onPress={() => { setShowUser(false); setShowFeedback(true); }}>
              <Text style={{ fontSize: 14, textDecorationLine: 'underline', color: '#FA321A', fontFamily: 'Inter_400Regular', textAlign: 'center' }}>Deixe-o aqui</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={(Logout)}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleDelete(usuario.id)}>
            <Text>Excluir</Text>
          </TouchableOpacity>

          
        </View>
      )}

      {showFeedback && (
        <View style={styles.feedback}>
          <Feedback />
        </View>
      )}
    </View>
  );
}

