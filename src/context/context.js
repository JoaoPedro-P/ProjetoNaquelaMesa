import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
export const UsuarioContext = createContext();

export default function UsuarioProvider({ children }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [pratoSelecionado, setPratoSelecionado] = useState([]);
  const [usuarios, setUsuarios] = useState({});
  const [pratos, setPratos] = useState([]);
  const [pratos_pedidos, setPratosPedidos] = useState([]);

  const url = "https://naquela-mesa-db.vercel.app/"

  function autenticar() {
    return axios.get(url + 'autenticar', {
      params: {
        email: email,
        senha: senha
      }
    })
      .then((response) => {

        if (response.status === 200) {
          return response.data;
        } else {
          console.log('Erro ao autenticar usuário');
          throw new Error('Erro ao autenticar usuário');
        }
      })
      .catch((erro) => {
        console.warn(erro);
      });
  }

  useEffect(() => {
    buscarPratos();
  }, []);

  async function buscarPratos() {
    try {
      const response = await axios.get(url + 'pratos');
      setPratos(response.data);
    } catch (erro) {
      console.warn(erro);
    }
  }

  function criarUsuario() {
    try {
      const response = axios.post(url + '/usuarios', {
        nome: nome,
        senha: senha,
        telefone: telefone,
        email: email
      });
    } catch (erro) {
      console.error(erro);
    }
  }

  async function criaPedido() {
    try {
      const response = await axios.post(url + 'pedidos', {
        id_usuario: usuarios.id,
        preco_final: valorTotal,
        pratos_pedidos: Object.values(pratos_pedidos)
      });
  
      // Trate a resposta se necessário
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro na chamada de API:", error);
      console.error("Configuração da solicitação:", error.config);
      if (error.response) {
        console.error("Resposta do servidor:", error.response.data);
      }
    }
  }
  


  return (
    <UsuarioContext.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        telefone,
        setTelefone,
        pratoSelecionado,
        setPratoSelecionado,
        valorTotal,
        setValorTotal,
        autenticar,
        criarUsuario,
        usuarios,
        setUsuarios,
        pratos,
        setPratos,
        buscarPratos,
        pratos_pedidos,
        setPratosPedidos,
        criaPedido
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}