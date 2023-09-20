import React, { useState, useEffect } from 'react';
import { TextInput, Image, TouchableOpacity, Text, View } from 'react-native'; 
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat'; 
import { useNavigation } from '@react-navigation/native';


export default function Resposta() { 
  const navigation=useNavigation()
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [textoAnimado, setTextoAnimado] = useState('');
  const textoCompleto = `O cultivo de milho envolve várias etapas, desde o preparo do solo até a colheita. Aqui está um guia básico sobre como plantar milho: Escolha do Local: Escolha um local com bastante luz solar e boa drenagem. O milho adora luz solar direta e solos bem drenados para um crescimento saudável. Preparo do Solo: Prepare o solo através de aragem ou escavação para soltar a terra. Remova pedras, ervas daninhas e detritos. Se possível, adicione matéria orgânica, como composto, para melhorar a estrutura do solo e fornecer nutrientes. Plantio: O milho pode ser plantado por sementes direto no solo ou através de mudas. Se você optar por semear diretamente, faça fileiras espaçadas apropriadas para a variedade de milho que você está cultivando. As sementes devem ser plantadas a uma profundidade de cerca de 2 a 5 centímetros, dependendo do tamanho da semente. Espaçamento: O espaçamento entre as plantas e as fileiras varia de acordo com a variedade de milho e as condições locais. Geralmente, as plantas são`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < textoCompleto.length) {
        setTextoAnimado(textoCompleto.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId); // Pare a animação quando o texto estiver completo
      }
    }, 50); // Intervalo de 50 milissegundos para adicionar o próximo caractere

    return () => {
      clearInterval(intervalId); // Limpar o intervalo ao desmontar o componente
    };
  }, []);

  function navegar() {
    navigation.navigate('Resposta2');
  }

  function navegarComAtraso(){
    setTimeout(()=>{
      navegar()
    }, 7000)
  }

  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
         <Title>{textoAnimado}</Title>
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
        />
        <View style={{marginLeft:100}}>
          <TouchableOpacity onPress={navegarComAtraso}>
            <Image
              source={require('../../assets/enviar.png')} 
              style={{ width: 21, height: 18 }} 
            />
          </TouchableOpacity>
        </View>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}