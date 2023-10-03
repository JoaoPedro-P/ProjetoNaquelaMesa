import React, { useContext, useState } from 'react';
import { View, Text, Alert, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { UsuarioContext } from '../../src/context/context';

export default function Pagamento(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const { valorTotal } = useContext(UsuarioContext);
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState('');

  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [codigoSeguranca, setCodigoSeguranca] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  const validarPagamento = () => {
    if (!pagamentoSelecionado) {
      Alert.alert('Selecione uma opção de pagamento.');
      return;
    }

    if (pagamentoSelecionado === 'app' && (!nomeCartao || !numeroCartao || !codigoSeguranca || !dataVencimento)) {
      Alert.alert('Preencha todos os campos do cartão de crédito.');
      return;
    }

    Alert.alert('Pagamento processado com sucesso!', '', [
      {
        text: 'Ok',
        onPress: () => {
          props.navigation.navigate('Inicio');
        },
      },
    ]);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 0.97,
      backgroundColor: '#6e5039',
    },
    itensName: {
      fontWeight: 'bold',
      fontSize: 22,
      color: '#fff',
    },
    itensPosition: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    itensText: {
      fontWeight: 'bold',
      fontSize: 18,
      paddingLeft: 10,
      paddingTop: 20,
      color:'white'
    },
    itensPrice: {
      position: 'absolute', left: 0, right: 0, bottom: 0
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.itensPosition}>
        <Button
          title="Pagamento no Cartão"
          onPress={() => setPagamentoSelecionado('cartao')}
          color={pagamentoSelecionado === 'cartao' ? '#b5a08f' : 'black'}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.itensPosition}>
        <Button
          title="Pagamento em Dinheiro"
          onPress={() => setPagamentoSelecionado('dinheiro')}
          color={pagamentoSelecionado === 'dinheiro' ? '#b5a08f' : 'black'}
        />
      </SafeAreaView>


      <SafeAreaView style={styles.itensPosition}>
        <Button
          title="Pagamento via Cartão de Crédito no aplicativo"
          onPress={() => setPagamentoSelecionado('app')}
          color={pagamentoSelecionado === 'app' ? '#b5a08f' : 'black'}
        />
      </SafeAreaView>

      {pagamentoSelecionado === 'app' && (
        <SafeAreaView>
          <Text style={styles.itensText}>Dados sobre o Cartão</Text>
          <TextInput
            placeholder="Nome escrito como no Cartão:"
            value={nomeCartao}
            onChangeText={(text) => setNomeCartao(text)}
            style={styles.itensText}
            cursorColor={'white'}
            placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="Número do Cartão:"
            value={numeroCartao}
            onChangeText={(text) => setNumeroCartao(text)}
            style={styles.itensText}
            cursorColor={'white'}
            placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="Código de Segurança:"
            value={codigoSeguranca}
            onChangeText={(text) => setCodigoSeguranca(text)}
            style={styles.itensText}
            cursorColor={'white'}
            placeholderTextColor={'white'}
          />
          <TextInput
            placeholder="Data de Vencimento (MM/AA):"
            value={dataVencimento}
            onChangeText={(text) => setDataVencimento(text)}
            style={styles.itensText}
            cursorColor={'white'}
            placeholderTextColor={'white'}
          />
        </SafeAreaView>
      )}

      <SafeAreaView style={styles.itensPrice}>
      <Text style={styles.itensText}>Total: R$ {valorTotal}</Text>


      <Button color={'black'} title="Pagar" onPress={validarPagamento} />
      </SafeAreaView>
    </SafeAreaView>
  );
}
