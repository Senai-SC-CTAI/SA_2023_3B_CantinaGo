import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

 

const CadastroScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [turma, setTurma] = useState('');

  const handleCadastro = () => {
    // Lógica para lidar com o cadastro aqui
    // Por exemplo, você pode validar os campos e fazer uma chamada para criar um novo usuário
  };

  return (
    <View style={styles.container}>
       <Image
        source={require('../../../assets/img/logo-cor.svg')} // Substitua pelo caminho correto da sua imagem
        style={styles.image}
      />

       <Text style={styles.title}> Cadastro </Text>
       
      <TextInput
        style={styles.input}
        placeholder="seuemail@gmail.com"
        value={email}
        onChangeText={setEmail}
        
        />

      
      <TextInput
        style={styles.input}
        placeholder="criar senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="turma"
        value={turma}
        onChangeText={setTurma}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />

      <TouchableOpacity>
        <Text style={styles.link}>Já possui uma conta? Faça login </Text>

      </TouchableOpacity>
    </View>
  );
};

export default CadastroScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#FA321A',
    fontWeight:  'bold'
  },
  input: {
    width: '50%',
    borderRadius: 10,
    height: 40,
    backgroundColor: '#F4F4F4',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    paddingLeft: 10,
  },
  link: {
    marginTop: 20,
    color: 'blue',
  },
  image: {
    width: 200, // Defina a largura desejada da imagem
    padding: 40,
    height: 200, // Defina a altura desejada da imagem
    resizeMode: 'contain', // Modo de redimensionamento da imagem
    marginBottom: 80, // Espaçamento superior
  },
  button: {
    backgroundColor: 'blue', // Cor de fundo do botão
    borderRadius: 10, // Borda arredondada
    padding: 10, // Espaçamento interno
    width: 150, // Largura do botão
  },
  icon: {
    paddingHorizontal: 10,
  },
});

