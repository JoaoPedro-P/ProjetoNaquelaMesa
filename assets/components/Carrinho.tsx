import React, { useContext, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Alert, Button, StyleSheet } from 'react-native';
import { UsuarioContext } from '../../src/context/context';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Carrinho({ navigation }) {
  const { pratoSelecionado, setPratoSelecionado, valorTotal, setValorTotal, pratos_pedidos, setPratosPedidos } = useContext(UsuarioContext);
  const nav = useNavigation();

  useEffect(() => {
    calcularValorTotal();
    criarPratosPedidos();
  }, [pratoSelecionado]);

  const removerItem = (index: number) => {
    const novoPratoSelecionado = [...pratoSelecionado];
    novoPratoSelecionado.splice(index, 1);
    setPratoSelecionado(novoPratoSelecionado);
  };

  const calcularValorTotal = () => {
    let total = 0;
    for (const item of pratoSelecionado) {
      total += parseFloat(item.price);
    }
    setValorTotal(total);
  };

  const criarPratosPedidos = () => {
    const pratosPedidos: any = {};
    for (const item of pratoSelecionado) {
      const idPrato = item.id.toString();
      if (pratosPedidos[idPrato]) {
        pratosPedidos[idPrato].quantidade += 1;
      } else {
        pratosPedidos[idPrato] = {
          id_prato: idPrato,
          quantidade: 1,
        };
      }
    }
    setPratosPedidos(pratosPedidos);
    console.log("Pratos Pedidos:", pratosPedidos); // Adicionando console.log
  };

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
    itensTexRemove: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingLeft: 6,
      color: '#fff'
    },
    itensPrice: {
      fontWeight: 'bold',
      fontSize: 19,
      padding: 8,
      color: '#fff'
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#fff'
    }
  })


  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <ScrollView style={styles.itensPosition}>
        <Text style={styles.itensName}> {item.name}</Text>
        <Text style={[styles.itensText, { flexWrap: 'wrap', textAlign: 'left' }]}>
                {item.ingredients.replace(/\\n/g, '\n')}
              </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.itensPrice}>Preço: R$ {item.price}</Text>
          <TouchableOpacity onPress={() => removerItem(index)}>
            <Icon
              name='trash'
              style={{ marginLeft: 200, marginTop: 2 }}
              size={25}
              color='white'
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pratoSelecionado}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.itensPrice}>Total: R$ {valorTotal}</Text>
      <Button color={'black'} title="Ir para o pagamento" onPress={() => { if (valorTotal !== 0) { navigation.navigate('Pagamento') } }} />
    </SafeAreaView>
  );
}

