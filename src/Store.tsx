import React, { useState } from "react";
import { ProdutoCarrinho } from "./interface";

interface Props {
  children: React.ReactNode;
}

interface globalContext {
  listaCarrinho: Array<ProdutoCarrinho>;
  setListaCarrinho: Function;
  nome: string,
  setNome: Function,
  email: string,
  setEmail: Function
}

export const AppContext = React.createContext<globalContext>({
  listaCarrinho: [],
  setListaCarrinho: () => {},
  nome: "",
  setNome: () => {},
  email: "",
  setEmail: () => {}
});

const Store = (props: Props) => {
 let DadosLocalStorage = []
  if (window.localStorage.getItem("carrinho")) {
      let stringLS = String(window.localStorage.getItem("carrinho"))
     DadosLocalStorage = JSON.parse(stringLS);
  }
 
  const [listaCarrinho, setListaCarrinho] = useState(DadosLocalStorage);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("")

  return (
    <AppContext.Provider
      value={{
        listaCarrinho,
        setListaCarrinho,
        nome,
        setNome,
        email,
        setEmail
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
