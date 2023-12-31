import { Image, Text, SafeAreaView, StyleSheet, ScrollView, SectionList, Alert, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { UsuarioContext } from '../../src/context/context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e5039',
  },
  itensName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  itensPosition: {
    flexDirection: 'row',
    padding: 10,
  },
  itensText: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 6,
    color: '#fff'
  },
  itensPrice: {
    fontWeight: 'bold',
    fontSize: 19,
    padding: 8,
    color: '#fff'
  },
  imagesSize: {
    width: 130,
    height: 170,
  },
  section: {
    backgroundColor: '#805d42',
    padding: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff'
  }
})


export default function TelaInicial() {
  const { pratoSelecionado, setPratoSelecionado, pratos, buscarPratos } = useContext(UsuarioContext); // Obtém a função do contexto

  const organizarPratosPorCategoria = (pratos: any) => {
    const pratosPorCategoria = pratos.reduce((acc: any, prato: any) => {
      const categoria = prato.title;
      if (!acc[categoria]) {
        acc[categoria] = [];
      }
      acc[categoria].push(prato);
      return acc;
    }, {});

    return Object.keys(pratosPorCategoria).map((categoria) => ({
      title: categoria,
      data: pratosPorCategoria[categoria],
    }));
  };

  const secoesPratos = organizarPratosPorCategoria(pratos);
  

  
  
  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity onPress={() => mostrarMensagem(item)}>
        <ScrollView style={styles.itensPosition}>
          <SafeAreaView style={{ flexDirection: 'row' }}>
            <SafeAreaView style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.itensName}>{item.name}</Text>
              <Text style={[styles.itensText, { flexWrap: 'wrap', textAlign: 'left' }]}>
                {item.ingredients.replace(/\\n/g, '\n')}
              </Text>
              <Text style={styles.itensPrice}>Preço: R$ {item.price}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </ScrollView>
      </TouchableOpacity>
    );
  };
  

  

  const mostrarMensagem = (item: any) => {
    setPratoSelecionado([...pratoSelecionado, item]);
  };

  return (
    <SafeAreaView style={styles.container}>
        <SectionList
          sections={secoesPratos}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <ScrollView style={styles.section}>
              <Text style={styles.sectionTitle}>{title}</Text>
            </ScrollView>
          )}
        />
    </SafeAreaView>
  );
}