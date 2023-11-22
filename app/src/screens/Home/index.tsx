  import React, { useState, useEffect } from 'react';
  import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
  import styles from './styles'; 
  import { useNavigation } from '@react-navigation/native'; // Hook para navegação.
  import { ComidaScroll } from '../../components/ComidaScroll'; // Importação do componente de ScrollHorizontal por categoria
  import DatePicker from 'react-native-modern-datepicker'; // Importação da API de calendário
  import { getToday, getFormatedDate } from 'react-native-modern-datepicker'; // Funções auxiliares relacionadas à data.
  import { format } from 'date-fns'; // Biblioteca para formatação de datas, traduzir dd/mm/yyyy para texto.
  import ptBR from 'date-fns/locale/pt-BR'; // Traduzir as datas para português.

  import coxinha from '../../../assets/img/Coxinha.png';
  import pastel from '../../../assets/img/Pastel.png';
  import barrinha from '../../../assets/img/SnackHitter.png';
  import docinho from '../../../assets/img/Beijinho.png';
  import salgadinho from '../../../assets/img/salgadinho.png';
  import bolomorango from '../../../assets/img/bolomorango.png';
  import crossaint from '../../../assets/img/croissant.png';
  import mandioca from '../../../assets/img/SnackMandioca.png';
  import cha from '../../../assets/img/Cha.png';
  import agua from '../../../assets/img/Agua.png';

  import {
    useFonts,
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium
  } from '@expo-google-fonts/inter'; // Importação de fontes do Google Fonts usando Expo.
  import Content from '../../data/Content';

  export const localImages: string[] = [coxinha, pastel, barrinha, docinho, salgadinho, bolomorango, crossaint, mandioca, cha, agua];


  // Componente principal da tela Home.
  export function Home() {
    // Carregando fontes definidas no objeto useFonts.
    useFonts({
      Inter_700Bold,
      Inter_600SemiBold,
      Inter_500Medium
    })

    // Estado para controlar a visibilidade do seletor de data.
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    // Estado para armazenar as categria vindas do backend.
    const [categoria, setCategoria] = useState<string[]>([]);

    const capitalize = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    // Estados para armazenar a data selecionada e o dia da semana correspondente além de deixar Capitalizado, Traduzido e em formato de texto conforme o design.
    const [selectedDate, setSelectedDate] = useState(
      capitalize(format(new Date(), "dd 'de' MMMM", { locale: ptBR }))
    ); // Armazena o dia selecionado e transforma ele em texto.
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(
      capitalize(format(new Date(), 'EEEE', { locale: ptBR }))
    ); // Armazena a semana.

    // Função para abrir o seletor de data.
    const openDatePicker = () => {
      setDatePickerVisible(true);
    };

    interface NavigationType {
      goBack: any;
      navigate: (routeName: string) => void;
    }
    const navigation: NavigationType = useNavigation();
  
    function user() {
      navigation.navigate("User");
    }

    // Obtendo a data atual.
    const today = getToday();

    // Função para lidar com a mudança de data no seletor de data.
    const handleDateChange = (selectedDate: any) => {
      const formattedDate = format(
        new Date(selectedDate),
        "dd 'de' MMMM",
        { locale: ptBR }
      );
      const dayOfWeek = capitalize(
        format(new Date(selectedDate), 'EEEE', { locale: ptBR })
      );

      setSelectedDate(capitalize(formattedDate));
      setSelectedDayOfWeek(dayOfWeek);

      console.log(formattedDate); // Data aparece no console
      setDatePickerVisible(false); // Fecha o seletor de data após selecionar uma data.
    };

    // Função para carregar as categria do backend.
    const fetchCategoria = async () => {
  try {
    const response = await fetch('http://localhost:8090/comidas');
    const data = await response.json();
    const uniqueCategoria = Array.from(
      new Set(data.map((item: any) => item.categoria))
    );
    setCategoria(uniqueCategoria);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



    // Carregar as categria ao montar o componeente.
    useEffect(() => {
      fetchCategoria();
    }, []);


    

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
              <TouchableOpacity
                onPress={openDatePicker}
                style={styles.buttonCalendario}
              >
                <Image
                  style={styles.calendario}
                  source={require('../../../assets/Icons/Calendario.png')}
                />
              </TouchableOpacity>
              <View>
                {/* Dia da semana selecionado */}
                <Text style={styles.diaSemana}>
                  {selectedDayOfWeek},
                </Text>
                {/* Data selecionada */}
                <Text style={styles.diaMes}>{selectedDate}</Text>
              </View>
            </View>
          </View>
          {/* Botão de navegação para a tela "User" */}
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 0,
              right: 30,
              marginLeft: 50,
            }}
            onPress={user}
          >
            <Image
              style={styles.user}
              source={require('../../../assets/img/User.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
            <View style={styles.containerComida}>
        {/* Componentes personalizados para mostrar listas de comidas */}
        {categoria.map((categoria, index) => (
  <ComidaScroll key={index} categoria={categoria} />
))}
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
              defaultFont: 'Inter_600SemiBold',
              headerFont: 'Inter_700Bold',
              textFontSize: 16,
              textHeaderFontSize: 23,
            }}
          />
        )}
      </ScrollView>
    );
  }