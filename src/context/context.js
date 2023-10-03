import React, {createContext, useState} from 'react'

export const UsuarioContext = createContext();

export default function UsuarioProvider({ children }) {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [valorTotal, setValorTotal] = useState('');
    const [pratoSelecionado, setPratoSelecionado] = useState([]);
  
    return (
      <UsuarioContext.Provider
        value={{
          username,
          setUsername,
          senha,
          setSenha,
          telefone,
          setTelefone,
          pratoSelecionado,
          setPratoSelecionado,
          valorTotal,
          setValorTotal
        }}
      >
        {children}
      </UsuarioContext.Provider>
    );
  }
