import 'react-native-gesture-handler';
import React, { useContext } from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './assets/components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './assets/components/Inicio';
import Perfil from './assets/components/Perfil';
import SobreNos from './assets/components/SobreNos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carrinho from './assets/components/Carrinho';
import { Alert } from 'react-native';
import UsuarioProvider, { UsuarioContext } from './src/context/context';
import Pagamento from './assets/components/Pagamento';

const navDrawer = createDrawerNavigator();
const navStack = createNativeStackNavigator();

function MainDrawer(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const { setUsername, setSenha, setTelefone, setPratoSelecionado, setValorTotal } = useContext(UsuarioContext);

  return (
    <navDrawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#dbc6b4',
        width: 200,
      },
      headerStyle:{
        backgroundColor:'#b5a08f'
      }
    }}>
      <navDrawer.Screen name='Inicial' component={TelaInicial} options={{
        headerTitle: 'Cardápio',
        headerRight: () => (
          <Icon
            name='shopping-cart'
            style={{ marginRight: 10 }}
            size={30}
            color='white'
            onPress={() => { props.navigation.navigate('Carrinho'); }}
          />
        ),
          drawerActiveBackgroundColor:'#b5a08f',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: '#121212',
          headerTintColor:'white'
      }} />
      <navDrawer.Screen name='Perfil' component={Perfil} options={{
        headerTitle: 'Perfil',
        headerRight: () => (
          <Icon
            name='power-settings-new'
            style={{ marginRight: 10 }}
            size={30}
            color='white'
            onPress={() => {
              Alert.alert(
                'Confirmação',
                'Você deseja sair e retornar à tela de Login?',
                [
                  {
                    text: 'Cancelar',
                    style: 'cancel',
                  },
                  {
                    text: 'Sim',
                    onPress: () => {
                      setUsername('');
                      setSenha('');
                      setTelefone('');
                      setPratoSelecionado([]);
                      setValorTotal('');
                      props.navigation.navigate('Login');
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          />
        ),
        drawerActiveBackgroundColor:'#b5a08f',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#121212',
        headerTintColor:'white'
      }} />
      <navDrawer.Screen name='Sobre' component={SobreNos} options={{
                headerTitle:'Sobre Nós',
                drawerActiveBackgroundColor:'#b5a08f',
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#121212',
                headerTintColor:'white'
      }}/>
    </navDrawer.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <UsuarioProvider>
        <navStack.Navigator screenOptions={{
          headerTintColor:'white',
          headerStyle:{backgroundColor:'#b5a08f'}
          }}>
          <navStack.Screen name='Login' component={Login} options={{ headerShown: false, navigationBarColor:'#b5a08f' }} />
          <navStack.Screen name='Inicio' component={MainDrawer} options={{ headerShown: false }} />
          <navStack.Screen name='Carrinho' component={Carrinho} />
          <navStack.Screen name='Pagamento' component={Pagamento} />
        </navStack.Navigator>
      </UsuarioProvider>
    </NavigationContainer>
  )
}