import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native'; // Hook para navegação em uma aplicação React Navigation.
import { ComidaScroll } from '../../components/ComidaScroll'; // Importação do componente cada Linha de alimentos por categoria

import DatePicker from 'react-native-modern-datepicker'; // Importação da API de calendário
import { getToday, getFormatedDate } from 'react-native-modern-datepicker'; // Funções auxiliares relacionadas à data.
import { format } from 'date-fns'; // Biblioteca para formatação de datas, traduzir dd/mm/yyyy para texto.
import ptBR from 'date-fns/locale/pt-BR'; // Traduzir as datas para português.

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium
}  from '@expo-google-fonts/inter'; // Importação de fontes do Google Fonts usando Expo.

// Componente principal da tela Home.
export function Home() {
  // Carregando fontes definidas no objeto useFonts.
  useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium
  })

  // Hook de navegação para redirecionamento entre telas.
  const navigation = useNavigation();

  // Estado para controlar a visibilidade do seletor de data.
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  // Função para navegar de volta para a tela "User".
  function back() {
    navigation.navigate("User");
  }

  // Função para abrir o seletor de data.
  const openDatePicker = () => {
    setDatePickerVisible(true);
  };

  // Função para deixar em maiusculo a primeira letra das string de Datas.
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Obtendo a data atual.
  const today = getToday();

  // Estados para armazenar a data selecionada e o dia da semana correspondente além de deixar Capitalizado, Traduzido e em formato de texto conforme o design.
  const [selectedDate, setSelectedDate] = useState(capitalize(format(new Date(), "dd 'de' MMMM", { locale: ptBR }))); //Armazena o dia selecionado e transforma ele em texto.
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(capitalize(format(new Date(), 'EEEE', { locale: ptBR })));//Armazena a semana.

  // Função para lidar com a mudança de data no seletor de data.
  const handleDateChange = (selectedDate: any) => {
    const formattedDate = format(new Date(selectedDate), "dd 'de' MMMM", { locale: ptBR });
    const dayOfWeek = capitalize(format(new Date(selectedDate), "EEEE", { locale: ptBR }));
  
    setSelectedDate(capitalize(formattedDate));
    setSelectedDayOfWeek(dayOfWeek);
  
    console.log(formattedDate); // Data aparece no console
    setDatePickerVisible(false); // Fecha o seletor de data após selecionar uma data.
  };


  return (
    // Componente de rolagem que abrange todo o conteúdo da tela. Essencial!!!
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View>
            <Text style={styles.bigText}>Bom dia!</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.infoHeader}>
            {/* Botão para abrir o seletor de data */}
            <TouchableOpacity onPress={openDatePicker} style={styles.buttonCalendario}>
              <Image 
                style={styles.calendario}
                source={require('../../../assets/icons/calendario.svg')}
              />
            </TouchableOpacity>
            <View>
              {/* Dia da semana selecionado */}
              <Text style={styles.diaSemana}>{selectedDayOfWeek},</Text>
              {/* Data selecionada */}
              <Text style={styles.diaMes}>{selectedDate}</Text>
            </View>
          </View>
        </View>
        {/* Botão de navegação para a tela "User" */}
        <TouchableOpacity style={{
          marginLeft: 50,
        }}
        onPress={back}>
          <Image 
            style={styles.user}
            source={require('../../../assets/img/User.svg')}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.main}>
        <View style={styles.containerComida}>
          {/* Componentes personalizados para mostrar listas de comidas */}
          <ComidaScroll category="Salgados" />
          <ComidaScroll category="Doces" />
          <ComidaScroll category="Bebidas" />
        </View>
      </View>
      
      {/* Seletor de data, visível quando isDatePickerVisible é true */}
      {isDatePickerVisible && (
        <DatePicker 
          mode="calendar"
          style={styles.datePicker}
          onSelectedChange={handleDateChange}
          options={{
            selectedTextColor: '#fff',
            mainColor: '#FD6A48',
            textSecondaryColor: '#000',
            defaultFont: "Inter_600SemiBold",
            headerFont: "Inter_700Bold",
            textFontSize: 16,
            textHeaderFontSize: 23,
          }}
        />
      )}
    </ScrollView>
  );
}
