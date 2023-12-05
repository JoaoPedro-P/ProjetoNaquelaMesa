import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Explicacao() {
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
    <SafeAreaProvider style={styles.container}>
      <Text style={styles.text}>Banco de Dados:</Text>
      <Text style={styles.text}> O banco de dados é composto por duas 4 tabelas:
            Usuários, Pedidos, Pedido_prato, Pratos.{'\n'}
      </Text>
      <Text style={styles.text}>
        A Tabela Usuários é responsável por guardar os usuários cadastrados na plataforma. Nela temos as linhas:
        Nome, Email, Telefone e Senha (plain text).{'\n'}
      </Text>
      <Text style={styles.text}>
        A Tabela Pratos é responsável por guardar todos os pratos do aplicativo. Cada prato apresenta os seguintes campos:
        Title (categoria do prato), Name (nome do prato), ingredients e Preço.{'\n'}
      </Text>
      <Text style={styles.text}>
        A Tabela Pedidos é responsável por guardar todos feitos no aplicativo. Nela, temos a relação com a tabela usuários de maneira unidirecional
        e no formato muitos para um, ou seja, eu posso ter muitos pedidos relacionados a um usuário.{'\n'}
      </Text>
      <Text style={styles.text}>
        A Tabela Pedido prato é responsável por guardar os pratos que foram escolhidos em um pedido. Nela, temos a relação com a tabela pedidos e pratos
        ou seja, a tabela pedido prato funciona como uma tabela de associação entre os pedidos e os pratos existentes no banco de dados.{'\n'}
      </Text>
    </SafeAreaProvider>
  )
}