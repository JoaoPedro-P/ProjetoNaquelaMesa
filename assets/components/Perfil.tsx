import React, { useContext, useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import { UsuarioContext } from '../../src/context/context';
import usuariosCadastrados from '../../src/data/usuarios';

export default function Perfil() {
  const { username, senha } = useContext(UsuarioContext); // Use o contexto do usuário
  const { telefone, setTelefone } = useContext(UsuarioContext); // Use os setters do contexto

  useEffect(() => {
    
    const usuarioEncontrado = usuariosCadastrados.find(
      (user) => user.usuario === username && user.senha === senha
      
    );

    if (usuarioEncontrado) {
      setTelefone(usuarioEncontrado.telefone);
    }
  }, [username, senha, setTelefone]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6e5039',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 25,
      fontFamily: "PlayfairDisplay-Italic-VariableFont_wght",
      padding:6,
      color: '#fff',
    },
    section: {
      width: 250,
      height: 250,
      borderRadius:180,
      
    }
  })

  return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView>
          <Image source={ require('../../src/img/Vinicius.jpg') } style={styles.section} />
          <Text style={styles.text}>Usuário: {username}</Text>
          <Text style={styles.text}>Telefone: {telefone}</Text>
        </SafeAreaView>
    </SafeAreaView>
  );
}
