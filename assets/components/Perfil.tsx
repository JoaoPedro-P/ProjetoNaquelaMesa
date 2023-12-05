import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import { UsuarioContext } from '../../src/context/context';

export default function Perfil() {
  const {usuarios} = useContext(UsuarioContext);

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
          <Image source={ require('../../src/img/vo.jpg') } style={styles.section} />
          <Text style={styles.text}>Usuário: {usuarios.nome}</Text>
          <Text style={styles.text}>Telefone: {usuarios.telefone}</Text>
          <Text style={styles.text}>Email: {usuarios.email}</Text>
        </SafeAreaView>
    </SafeAreaView>
  );
}
