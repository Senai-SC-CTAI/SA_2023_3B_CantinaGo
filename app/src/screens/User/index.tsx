import * as React from 'react';
import { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold
  }  from '@expo-google-fonts/inter';


import { Feedback } from '../Feedback';
import styles from './styles';



export function User() {

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
})

  const navigation = useNavigation();

  function back() {
    navigation.navigate("Home");
  }

  const [showUser, setShowUser] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  function Logout() {
    navigation.navigate('SignIn')
  }

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
                source={require('../../../assets/img/User.svg')}
                style={styles.image}
              />
              <View style={{
                  backgroundColor: '#6A6A6A',
                  borderRadius: 100, 
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  marginLeft: 80, 
                  marginTop: 25,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Image
                  source={require("../../../assets/Icons/Editar.svg")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",

                  }}
                />
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={{ fontSize: 20, fontFamily: "Inter_700Bold" }}>Nome do Usuário</Text>
              <Text style={{ fontSize: 14, color: '#9E9D9D', fontFamily:"Inter_400Regular"}}>Tipo de usuário</Text>
            </View>
          </View>
          <View style={styles.inputsInfo}>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Email.svg")}
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
                source={require("../../../assets/Icons/Data.svg")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              />
              <TextInput style={styles.inputs} placeholder="  data de nascimento" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>

              <Image
                source={require("../../../assets/Icons/EditarCinza.svg")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  marginRight: 10,
                }}
              />

            </View>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Turma.svg")}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              />
              <TextInput style={styles.inputs} placeholder="  turma" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>
              <Image
                source={require("../../../assets/Icons/EditarCinza.svg")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  marginRight: 10,
                }}
              />            
              </View>
            <View style={styles.viewInput}>
              <Image
                source={require("../../../assets/Icons/Telefone.svg")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginLeft: 13,
                }}
              />
              <TextInput style={styles.inputs} placeholder="  telefone" placeholderTextColor={"#6A6A6A"}  >
              </TextInput>
              <Image
                source={require("../../../assets/Icons/EditarCinza.svg")}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                  marginRight: 10,
                }}
              />           
              </View>
          </View>
          <View style={styles.feedbackText}>
            <Text style={{ color: "#9E9D9D", fontSize: 14, fontFamily:'Inter_400Regular' }}>Algum comentário?</Text>
            <TouchableOpacity onPress={() => { setShowUser(false); setShowFeedback(true); }}>
              <Text style={{ fontSize: 14, textDecorationLine: 'underline', color: '#FA321A', fontFamily:'Inter_400Regular'  }}>Deixe-o aqui</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={(Logout)}>
            <Text style={styles.buttonText}>Sair</Text>
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

