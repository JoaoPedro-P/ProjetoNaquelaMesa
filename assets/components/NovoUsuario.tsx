import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text} from 'react-native';
import { UsuarioContext } from '../../src/context/context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function NovoUsuario(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const { email, setEmail, senha, setSenha, telefone, setTelefone, nome, setNome, criarUsuario } = useContext(UsuarioContext);

  function cadastrar() {
    criarUsuario();
    setNome('');
    setEmail('');
    setSenha('');
    setTelefone('');
    props.navigation.navigate('Login')
  }

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
      height: 900,
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#fff',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: 'white',
      padding: 10,
      width: '100%',
    },
    button: {
      marginTop: 20,
      backgroundColor: 'black',
    },
    buttonText: {
      color: 'white',
    },
    barName: {
      position: 'absolute',
      top: 40,
      right: 100,
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      },
    image: {
      width: 400,
      height: 400,
    },
    
  });

  return (
    <KeyboardAwareScrollView
  >
    <View style={styles.container}>
      <Text style={styles.barName}> Cadastro de Usuários</Text>
      <View style={styles.contentContainer}>
        <TextInput
          placeholder="Nome:"
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={styles.sectionTitle}
          placeholderTextColor={'white'}
        />
        <TextInput
          placeholder="Email:"
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
        <TextInput
          placeholder="Telefone:"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
          style={styles.sectionTitle}
          placeholderTextColor={'white'}
        />
        <Button
          title="Cadastrar"
          onPress={cadastrar}
          color={'black'}
        />
      </View>
    </View>
  </KeyboardAwareScrollView>
  );
}
