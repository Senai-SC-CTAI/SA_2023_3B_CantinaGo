import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import axios from 'axios';

import { User } from '../User'

import styles from './style'

export function Feedback() {

  useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium

  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:8090/feedback')
      setFeedback(response.data);
    } catch (error) {
      console.log('erro', error)
    }
  };


  const handleSubmit = async () => {
    try {
      let novoFeedback = {
        data: Date.now(),
        comentario: comentarioInput,
      };
      await axios.post('http://localhost:8090/feedback', novoFeedback);
      fetchFeedback();
      setComentarioInput(''); // Limpa o campo de comentário após o envio
    } catch (error) {
      console.error('Erro ao criar feedback:', error);
    }
  };

  // const handleUpdate = async (id, feedbackAtualizado) => {
  //   try {
  //     await axios.put(`http://localhost:8090/feedback/${id}`, feedbackAtualizado);
  //     fetchFeedback();
  //   } catch (error) {
  //     console.error('Erro ao atualizar', error);
  //   }
  // };

  // useState de feedback

  const [feedback, setFeedback] = useState([]);
  const [comentarioInput, setComentarioInput] = useState('');

  const [showUser, setShowUser] = useState(false);
  const [showFeedback, setShowFeedback] = useState(true);

  return (

    <View>
      {/* tela usuario */}
      {showUser && (
        <View style={styles.user}>
          <User />
        </View>
      )}
      {/* tela feedback */}
      {showFeedback && (
        <View style={styles.feedback}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => { setShowUser(true); setShowFeedback(false); }}>
              <Feather
                name="arrow-left"
                size={38}
                color="#FA321A"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Feedback</Text>
          </View>
          <View style={styles.feedBackImage}><Image source={require("../../../assets/img/feedback-img.svg")} style={{ width: 89, height: 82, marginTop: 10 }} />
          </View>
          <View style={styles.inputBox}>

            <TextInput style={styles.TextInput}
              placeholder='Adicione um comentario...'
              value={comentarioInput}
              onChangeText={(text) => setComentarioInput(text)}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttom}
              onPress={handleSubmit}>
              <Text style={{ color: "white", fontFamily: "Inter_600SemiBold" }}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
}


