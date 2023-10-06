import React, { useContext } from 'react';
import { Image, Button, TextInput, Alert, SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { UsuarioContext } from '../../src/context/context';
import usuariosCadastrados from '../../src/data/usuarios'; 

export default function Login(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const { username, setUsername, senha, setSenha } = useContext(UsuarioContext);

  const VerifyLogin = () => {
    const usuarioEncontrado = usuariosCadastrados.find(
      (u) => u.usuario === username && u.senha === senha
    );

    if (usuarioEncontrado) {
      props.navigation.navigate('Inicio');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
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
    barName: {
      position: 'absolute',
      top: 40,
      right: 210,
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.barName}>Naquela Mesa</Text>
      <KeyboardAvoidingView contentContainerStyle={styles.contentContainer}>
        <Image source={require('../../src/img/logo.png')} style={styles.image} />
        <TextInput
          placeholder="Usuário:"
          value={username}
          onChangeText={(text) => setUsername(text)}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
