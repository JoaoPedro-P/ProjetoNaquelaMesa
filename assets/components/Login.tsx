import React, { useContext } from 'react';
import { Image, Button, TextInput, Alert, SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { UsuarioContext } from '../../src/context/context';

export default function Login(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const { email, setEmail, senha, setSenha, autenticar, setUsuarios} = useContext(UsuarioContext);

  const VerifyLogin = () => {
    autenticar()
    .then((response: any) => {
      if (response && response.message === undefined) {
        setUsuarios(response)
        props.navigation.navigate('Inicio');
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos');
      }
    })
    .catch((erro: any) => {
      console.warn(erro);
    });
  };
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6e5039',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#fff',
      marginBottom: 20,
    },
    image: {
      width: 400,
      height: 400,
      marginTop: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.contentContainer}>
        <Image source={require('../../src/img/logo.png')} style={styles.image} />
        <TextInput
          placeholder="Usuário:"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.sectionTitle}
          placeholderTextColor={'white'}
        />
        <TextInput
          placeholder="Senha:"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
          style={styles.sectionTitle}
          placeholderTextColor={'white'}
        />
        <Button title="Login" onPress={VerifyLogin} color={'black'} />

        {/* Adicionando o botão para a tela de cadastro */}
        <Button
          title="Criar Nova Conta"
          onPress={() => props.navigation.navigate('Novo Usuario')} // Navega para a tela de NovoUsuario
          color={'black'}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}