import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SobreNos() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6e5039',
      paddingHorizontal: 16,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#fff',
      textAlign: 'justify', // Justificar o texto
      lineHeight: 27, // Espaço entre as linhas de 1.5 (18 * 1.5 = 27)
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>
          Quando penso no "Naquela Mesa", não consigo evitar um sorriso nostálgico. Este bar é a minha singela homenagem ao meu avô, um homem que me ensinou a amar a vida, a música e a boa comida.
        </Text>
        <Text style={styles.text}>
          As músicas que ecoam aqui são como um abraço do passado. Elas remetem aos anos dourados, da década de 30 até os anos 80, exatamente como as canções que meu avô costumava ouvir em seu rádio a pilha. Cada nota carrega uma lembrança, cada melodia é uma página da nossa história juntos.
        </Text>
        <Text style={styles.text}>
          E a comida? Ah, a comida é uma celebração dos sabores que ele tanto aprecia. Os petiscos de boteco ganham um toque especial, com ingredientes que evocam os cantores que ele ama. É como se cada prato fosse uma canção em forma de sabor, uma maneira de manter viva a paixão do meu avô.
        </Text>
        <Text style={styles.text}>
          No "Naquela Mesa", você não está apenas saboreando comida e música. Você está fazendo parte de uma jornada sentimental, está se conectando com uma tradição familiar, está sentindo o calor da nossa herança. Este lugar é mais do que um bar, é um pedaço do meu coração, é um tributo carinhoso a um homem que moldou a minha vida de maneiras indescritíveis.
        </Text>
        <Text style={styles.text}>
          Então, venha para o "Naquela Mesa" e junte-se a nós. Deixe-se envolver por esse mundo de memórias e sabores. Sinta o amor, a música e a comida se entrelaçarem em uma experiência que é ao mesmo tempo única e profundamente sentimental. É como estar com a família, é como estar em casa.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
