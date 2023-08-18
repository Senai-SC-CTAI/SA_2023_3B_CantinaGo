import * as React from 'react';
import { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import { Feedback } from '../Feedback';

import styles from './styles';

export function User() {

  const [showUser, setShowUser] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  const navigation = useNavigation()

  function Logout() {
    navigation.navigate('SignIn')
  }

  return (
    <View>
      {showUser && (
        <View style={styles.user}>

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
                style={styles.image}
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
          <View style={styles.feedbackText}>
            <Text style={{ color: "#9E9D9D", fontSize: 14 }}>Algum comentário?</Text>
            <TouchableOpacity onPress={() => { setShowUser(false); setShowFeedback(true); }}>
              <Text style={{ fontSize: 14, textDecorationLine: 'underline', color: '#FA321A' }}>Deixe-o aqui</Text>
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

